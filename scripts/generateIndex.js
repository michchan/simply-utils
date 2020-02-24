const fs = require('fs');

/** ---------------- Execute ---------------- */

// Read module names from src
const folderNames = fs
    // Read the '/src' folder
    .readdirSync('src')
    // Filter out 'index.ts'
    .filter(name => !['index.ts'].includes(name))

// Map modules names to import statements
const importStatements = folderNames
    .map(name => 'import * as ' + name + ' from \'./' + name + '\'')
    .join('\n')

// Map modules names to named export statements
const namedExportsStatements = folderNames
    .map(name => 'export * from \'./' + name + '\'')
    .join('\n')

// Map modules names to module export statements
const moduleExportsStatements = folderNames
    .map(name => '    ...' + name + ',')
    .join('\n')

// Generate string of whole file
const fileText = 
    importStatements + '\n\n\n' +
    '/** -------------------- Named export -------------------- */\n\n' +
    namedExportsStatements + '\n\n' +
    '/** -------------------- Module export -------------------- */\n\n' +
    'export default {\n' +
    moduleExportsStatements +
    '\n}'

// Write exports codes to the src/index.ts file (or create one and write)
fs.writeFileSync('src/index.ts', fileText)