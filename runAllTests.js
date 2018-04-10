#!/usr/local/bin/node
// TEST=$1
// mocha --require tests/bootstrap.js $TEST

const glob = require('glob-fs')()
const Promise = require('bluebird')
const { exec } = require('child_process')
const execAsync = Promise.promisify(exec)

const getCmd = test => `mocha --require tests/bootstrap.js tests/${test.replace('.js', '.test.js')}`

const files = glob.readdirSync('**/ex*.js')
  .filter(f => /ex\d+\.js$/.test(f))
  // .map(f => 'tests/' + f.replace('.js', '.test.js'))

const log = (f, status) => {
  console.log(`${f}: ${ status ? 'OK': 'Fail' }`)
  return status
}

const runTest = f => execAsync(getCmd(f))
.then(() => log(f, true))
.catch(() => log(f, false))

Promise.reduce(files, (c, f) => runTest(f)
  .then(status => ({ ...c, [f]: status })), {}
)
.then(console.log)