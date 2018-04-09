global.assert = require('assert')
global.catchConsole = require('../lib/catchConsole')
global.checks = require('../lib/checks')

const fs = require('fs')
const path = require('path')
const processArgs = [...process.argv]
const testFile = processArgs.pop()
const exercise = testFile.replace(
  /tests\/([^.]+)\.test\.js/, (matches, $1) => $1
)

const sourcePath = path.normalize(`${__dirname}/../${exercise}.js`)
global.source = fs.readFileSync(sourcePath).toString()
