#!/usr/local/bin/node
// TEST=$1
// mocha --require tests/bootstrap.js $TEST

const glob = require('glob-fs')()
const Promise = require('bluebird')
const { exec } = require('child_process')
const execAsync = Promise.promisify(exec)
const Git = require("nodegit")
// const students = require('./students.json')

const checkoutBranch = branchName => Git.Repository.open(".")
.then(repo => repo.getBranch(`refs/heads/${branchName}`)
  .then(ref => repo.checkoutRef(ref))
)


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

const runAllTests = () => Promise.reduce(
  files, (c, file) => runTest(file)
    .then(status => c.concat([{ file, status }])),
  []
)

// const runOnAllBranches =

// Promise.reduce(students, (results, stud) => {
//   const { name, branchName } = stud
//   console.log(`Running tests for ${name} => checkout branch ${branchName}`)
//   return checkoutBranch(branchName)
//   .then(runAllTests)
//   .then(tests => results.concat([{ name, branchName, tests }]))
// })

runAllTests()
.then(console.log)