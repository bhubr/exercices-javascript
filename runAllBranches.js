#!/usr/local/bin/node

const Git = require("nodegit")
const fs = require('fs')
const Promise = require('bluebird')
const writeAsync = Promise.promisify(fs.writeFile)

const runAllTests = require('./runAllTests')
const formatTestResults = require('./formatTestResults')
const students = require('./students.json')

const getCurrentBranch = () => Git.Repository.open(".")
  .then(repo => repo.getCurrentBranch())
  .then(ref => ref.name().split('/').pop())

const checkoutBranch = branchName => Git.Repository.open(".")
.then(repo => repo.getBranch(`refs/heads/${branchName}`)
  .then(ref => repo.checkoutRef(ref))
)

const runAllBranches = () =>
  Promise.reduce(students, (results, stud) => {
    const { name, branchName } = stud
    console.log(`Running tests for ${name} => checkout branch ${branchName}`)
    return checkoutBranch(branchName)
    .then(runAllTests)
    .then(tests => results.concat([{ name, branchName, tests }]))
  }, [])


getCurrentBranch()
.then(currentBranch => runAllBranches()
  .then(results => checkoutBranch(currentBranch)
    .then(() => formatTestResults(results))
  )
)
.then(html => writeAsync('results.html', html))