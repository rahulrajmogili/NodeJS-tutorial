const {readFileSync, writeFileSync} = require('fs')

const firstTextFile = readFileSync('./content/first.txt', 'utf-8')
const secondTextFile = readFileSync('./content/second.txt', 'utf-8')

console.log(firstTextFile)
console.log(secondTextFile)

writeFileSync('./content/third.txt', `Here is the result: ${firstTextFile}, ${secondTextFile}`)