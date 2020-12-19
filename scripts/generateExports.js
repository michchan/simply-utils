/* eslint-disable no-console */
const fs = require('fs')

/** ---------------- Definition ---------------- */

function main (dir) {
  // Log out the dir
  console.log(`Generate index file of ${dir}`)

  // Read filenames from export statements like "export * from './someFile'"
  const filenames = fs
    // Read the directory specified
    .readdirSync(dir)
    // Filter out 'index.ts' and directory name
    .filter(name => !['index.ts'].includes(name) && !/\.ts$/i.test(name))
    // Map every filename to the export statement
    .map(filename => {
      // Remove all '.ts' extension from filenames
      const name = filename.replace(/\.ts$/i, '')
      // Construct the export statement
      return `export { default as ${name} } from './${name}'`
    })
    // Join all lines with line break symbol
    .join('\n')

  // Write exports codes to the index.ts file (or create one and write)
  fs.writeFileSync(`${dir}/index.ts`, filenames)
}

module.exports = main