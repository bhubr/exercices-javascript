const catchConsole = {

  log: function(...args) {
    let consoleLine = ''
    const argsArray = [...args]
    argsArray.forEach((bit, i) => {
      const separator = i === 0 ? '' : ' ';
      consoleLine += separator + bit;
    })
    this.catched.push(consoleLine)
    if(! this.silentMode) {
      this.originalLog.apply(console, argsArray)
    }
  },

  get: function() {
    return this.catched
  },

  reset: function() {
    this.catched = []
  },

  enable: function(silent) {
    this.silentMode = silent === true
    this.originalLog = console.log
    this.catched = []
    console.log = this.log.bind(this)
  },

  disable: function() {
    console.log = this.originalLog
  }

}

if(typeof global !== 'undefined') {
  module.exports = catchConsole
}