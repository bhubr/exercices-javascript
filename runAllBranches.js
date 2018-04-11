#!/usr/local/bin/node

const Git = require("nodegit")
const Promise = require('bluebird')
const runAllTests = require('./runAllTests')
const students = require('./students.json')

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

runAllBranches()
.then(console.log)