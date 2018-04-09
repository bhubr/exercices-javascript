const c = require('./catchConsole')
const assert = require('assert')

c.enable(true)
console.log('one', 'line')
console.log('another', 'line')
const output = c.get()
c.disable()
console.log('restored console.log', output)