#!/usr/local/bin/node

const glob = require('glob-fs')()
const Promise = require('bluebird')
const { exec } = require('child_process')
const execAsync = Promise.promisify(exec)

// Get test command
const getCmd = test => `mocha --require tests/bootstrap tests/${test.replace('.js', '.test.js')}`

const log = (f, status) => {
  console.log(`${f}: ${ status ? 'OK': 'Fail' }`)
  return status
}

const runTest = f => execAsync(getCmd(f))
.then(() => log(f, true))
.catch(() => log(f, false))

const stripWorkingDir = f => f.includes(__dirname) ?
  f.substr(__dirname.length + 1) : f

const runAllTests = () =>
  glob.readdirPromise('**/ex*.js')
  .then(files => files
    .filter(f => /ex\d+(\-[-a-z0-9]+)?\.js$/.test(f))
    .filter(f => ! f.endsWith('.test.js'))
    // .map(f => console.log(f))
    .map(stripWorkingDir)
  )
  .then(files => Promise.reduce(
      files, (c, file) => runTest(file)
        .then(status => c.concat([{ file, status }])),
      []
    )
  )

if(process.argv[1].includes('runAllTests')) {
  runAllTests()
  .then(() => console.log('DONE!'))
}

module.exports = runAllTests
