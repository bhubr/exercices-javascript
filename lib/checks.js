if(typeof assert === 'undefined') {
  const assert = require('assert')
}

const checkValue = (obj, key, expectedType, expectedValue) => {
  assert.notEqual(typeof obj[key], 'undefined', `La propriété '${key}' n'est pas définie`)
  assert.equal(typeof obj[key], expectedType, `La propriété '${key}' n'est pas du type '${expectedType}'`)
  assert.equal(obj[key], expectedValue, `La propriété '${key}' n'a pas la valeur '${expectedValue}'`)
}

const checkIsUndef = (obj, key) => {
  assert.equal(typeof obj[key], 'undefined')
}

const checkValues = (arr, key, expectedType, expectedValue) => {
  for(item of arr) {
    checkValue(item, key, expectedType, expectedValue)
  }
}

const checks = {
  value: checkValue,
  values: checkValues,
  undef: checkIsUndef
}

if(typeof global !== 'undefined') {
  module.exports = checks
}