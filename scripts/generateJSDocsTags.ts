/* eslint-disable no-console */
import fs = require('fs')

/** ---------------- Read folder name ---------------- */

// Read module names from src
const folderNames = fs
  // Read the '/src' folder
  .readdirSync('src')
  // Filter out 'index.ts'
  .filter(name => !['index.ts'].includes(name))

/** ---------------- Definition ---------------- */

function main (dir: string): void {
  const pureDir = dir.replace(/^src/i, '')
  // Log out the dir
  console.log(`Generate JSDocs Tags of ${dir}`)

  // Read filenames from export statements like "export * from './someFile'"
  const filenames = fs
    // Read the directory specified
    .readdirSync(dir)
    // Filter out 'index.ts' and private files/folders
    .filter(name => !['index.ts'].includes(name) && !/^\_/.test(name))

  // Read and replace each file
  filenames.forEach(filename => {
    const fullName = `${dir}/${filename}`
    const content = fs.readFileSync(fullName).toString()
    const lines = content.split('\n')
    // eslint-disable-next-line no-empty-character-class
    const name = filename.replace(/\.ts|\.tsx$/i, '')

    const newLines = lines.reduce((acc, line) => {
      if (line.startsWith(`const ${name}`) || line.startsWith(`function ${name}`)) {
        // Const [, endOfBlockCommentLine] = acc.slice()
        const prevLines = acc.slice(0, acc.length - 1)
        const endOfBlockCommentLine = acc.slice(-1)
        if (endOfBlockCommentLine[0]?.startsWith(' */')) {
          return [
            ...prevLines,
            ` * @category ${pureDir.replace(/^\//, '')}`,
            ` * @module ${name}`,
            ...endOfBlockCommentLine,
            line,
          ]
        }
      }
      return [...acc, line]
    }, [] as string[])

    fs.writeFileSync(fullName, newLines.join('\n'))
  })
}

/** ---------------- Execute ---------------- */

// Generate module index
folderNames.forEach(name => main(`src/${name}`))