const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

// when you import a module, you actually invoke the functions in it
require('./7-mind-grenade')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
console.log(data)