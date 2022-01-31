/* eslint-disable no-console */
import fs = require('fs')

const BLOCK_CM_START = '/**'
const BLOCK_CM_END = ' */'

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

    const catLine = ` * @category ${pureDir.replace(/^\//, '')}`
    const modLine = ` * @module ${name}`

    const newLines = lines.reduce((acc, line) => {
      if (
        line.startsWith(`const ${name}`) ||
        line.startsWith(`function ${name}`) ||
        line.startsWith(`export function ${name}`) || 
        line.startsWith(`async function ${name}`) || 
        line.startsWith(`export async function ${name}`)
      ) {
        const prevLines = acc.slice(0, acc.length - 1).filter(line => {
          if (line === catLine || line === modLine) return false
          return true
        })

        if (!lines.includes(BLOCK_CM_START) || !lines.includes(BLOCK_CM_END)) {
          return [
            ...prevLines,
            BLOCK_CM_START,
            catLine,
            modLine,
            ' */',
            line,
          ]
        }

        const endOfBlockCommentLine = acc.slice(-1)
        if (endOfBlockCommentLine[0]?.startsWith(' */')) {
          return [
            ...prevLines,
            catLine,
            modLine,
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
folderNames.forEach(name => {
  // Skip private/internal directory
  if (!name.startsWith('_'))
    main(`src/${name}`)
})