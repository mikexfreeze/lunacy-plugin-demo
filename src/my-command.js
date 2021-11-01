import sketch from 'sketch'
// documentation: https://developer.sketchapp.com/reference/api/
import { Document } from 'sketch/dom';
var global = globalThis

import isBrowser from './test-environment';
import writeFile from './test-savefile';
export default function() {

  writeFile()

  // const document = Document.getSelectedDocument();
  // for (const [key, prop] of Object.entries(process)) {
  //   console.log(`${key}: ${typeof prop}`)
  // }
  
  // console.log(typeof globalThis)
  // console.log(typeof NSSavePanel)

  // console.log(isBrowser())

  // console.log(process.version)

  // globalThis.showSaveDialog()

  sketch.UI.message("It's alive 🙌")
}
