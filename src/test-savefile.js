import fs from '@skpm/fs';

export default function writeFile(){

  const content = 'Some content!'

  // console.log(process.cwd())
  try {
    const data = fs.writeFileSync('./file123.txt', content)
    //file written successfully
  } catch (err) {
    console.error(err)
  }
  try {
    const data = fs.readFileSync('./file123.txt')
    console.log(data)
    //file written successfully
  } catch (err) {
    console.error(err)
  }

}