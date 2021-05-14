import React, {useState} from 'react'
import ModifierBtn from './ModifierBtn'

const CodeBlock = ({code}) => {
  const [isCodeEditable, setIsCodeEditable] = useState(false)
  const textAreaStyle = {minHeight:'300px',background:'#666', border:'none', color:'#FFF', padding:'2rem'}

  return (
  !isCodeEditable? 
  <div className="codeblock" id="codeblock">
    <pre>
    <code id ="code">
      {code ? code : ''}
    </code>
    <ModifierBtn
      modType="Edit" 
      onClick={() => setIsCodeEditable(!isCodeEditable)}
    />
    </pre>
  </div> : 
  <>
    <textarea id="code-edit" defaultValue={code} style={textAreaStyle}></textarea>
    <ModifierBtn
        modType="Edit" 
        onClick={() => setIsCodeEditable(!isCodeEditable)}
    />
  </>
  )
}

export default CodeBlock
