/* eslint-disable no-console */
import fs = require('fs')

const BLOCK_CM_START = '/**'
const BLOCK_CM_END = ' */'

const isModuleDeclarationLine = (line: string, name: string = ''): boolean => (
  line.startsWith(`const ${name}`) ||
  line.startsWith(`function ${name}`) ||
  line.startsWith(`export function ${name}`) || 
  line.startsWith(`async function ${name}`) || 
  line.startsWith(`export async function ${name}`)
)

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

    let moduleLineCursor = 0;
    const newLines = lines.reduce((acc, line, i) => {
      const prevLines = acc.slice(0, acc.length - 1)

      // ========== Generate/manipulate tag lines for exported modules ==========
      if (isModuleDeclarationLine(line, name)) {
        const prevNormalizedLine = prevLines.filter(line => {
          if (line === catLine || line === modLine) return false
          return true
        })

        // Generate block comment as well
        if (!lines.includes(BLOCK_CM_START) || !lines.includes(BLOCK_CM_END)) {
          return [
            ...prevNormalizedLine,
            BLOCK_CM_START,
            catLine,
            modLine,
            ' */',
            line,
          ]
        }

        // Add tags to existing block comments
        const [endOfBlockCommentLine] = acc.slice(-1) ?? []
        if (endOfBlockCommentLine?.startsWith(' */')) {
          return [
            ...prevNormalizedLine,
            catLine,
            modLine,
            endOfBlockCommentLine,
            line,
          ]
        }

        moduleLineCursor = i
      }
      // ========== Ignore internal modules ==========
      if (isModuleDeclarationLine(line)) {
        if (!prevLines.slice(moduleLineCursor).some(l => /^( \* @ignore)|(\/\*\* @ignore )/i.test(l))) {
          const [endOfBlockCommentLine] = acc.slice(-1) ?? []
          if (endOfBlockCommentLine?.startsWith(' */')) {
            return [
              ...prevLines,
              ' * @ignore',
              endOfBlockCommentLine,
              line,
            ]
          }
          if (endOfBlockCommentLine?.startsWith('/**')) {
            return [
              ...prevLines,
              `/** @ignore ${endOfBlockCommentLine?.replace(/^(\/\*\*( @ignore )?)/, '') ?? ''}`,
              line,
            ]
          }
        }

        moduleLineCursor = i
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