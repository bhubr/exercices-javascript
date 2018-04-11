#!/usr/local/bin/node

const glob = require('glob-fs')()
const Promise = require('bluebird')
const { exec } = require('child_process')
const execAsync = Promise.promisify(exec)

// Get test command
const getCmd = test => `mocha --require tests/bootstrap.js tests/${test.replace('.js', '.test.js')}`

const log = (f, status) => {
  console.log(`${f}: ${ status ? 'OK': 'Fail' }`)
  return status
}

const runTest = f => execAsync(getCmd(f))
.then(() => log(f, true))
.catch(() => log(f, false))

const runAllTests = () => 
  glob.readdirPromise('**/ex*.js')
  .then(files => files.filter(f => /ex\d+\.js$/.test(f)))
  .then(files => Promise.reduce(
      files, (c, file) => runTest(file)
        .then(status => c.concat([{ file, status }])),
      []
    )
  )

module.exports = runAllTests