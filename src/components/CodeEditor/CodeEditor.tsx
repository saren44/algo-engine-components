import { useState } from "react"
import { StyledCodeEditor } from "./styles"
import Editor from "react-simple-code-editor"
import {highlight, languages } from 'prismjs'
import 'prismjs/themes/prism-dark.css'


languages.test = {
  'comment': /\/\/.*/,
  'keyword': /(class)|(string)|(bool)|(extends)/,
  'number': /\b\d+(?:\.\d+)?\b/,
  'builtin':{
    pattern: /GlobalScript|UniqueObject/,
    alias: 'tag'
  }
}


export const CodeEditor = () => {
  const [code, setCode] = useState<string>('class ExampleScript extends GlobalScript {\n//your code here...\n}')
  //console.log(highlight(code, languages.test, 'js'))

  return(
    <StyledCodeEditor>
      <Editor 
        value={code}
        padding={10}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.test, 'js')}
        style={{
          fontFamily: "monospace",
          fontSize: 17,
          border: "none",
          minHeight: 'inherit',
        }}
      />
    </StyledCodeEditor>
  )
}