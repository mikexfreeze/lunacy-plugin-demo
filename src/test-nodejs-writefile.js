const fs = require('fs')

const content = 'Some content!'

try {
  const data = fs.writeFileSync('./file1.txt', content)
  //file written successfully
} catch (err) {
  console.error(err)
}

// read file
try {
  const data = fs.readFileSync('./file1.txt')
  console.log(data)
  //file written successfully
} catch (err) {
  console.error(err)
}