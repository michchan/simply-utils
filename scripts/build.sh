#!/bin/sh

# Move files from /dist to project root
cp -r dist dist_temp
mv dist_temp/* .
rm -r dist_temp

# Remove unnecessary files for distribution
rm -r .github
rm -r .husky
rm -r .vscode
rm -r docs
rm -r scripts
rm -r src
rm .eslintignore
rm .eslintrc.js
rm .nvmrc
rm .stylelintrc.json
rm CHANGELOG.md
rm CONTRIBUTING.md
rm jsdoc.json
rm README.md
rm tsconfig.json