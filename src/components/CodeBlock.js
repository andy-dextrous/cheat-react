import React, {useState, useContext, useEffect} from 'react'
import ModifierBtn from './ModifierBtn'
import {chosenTopicContext} from './Main'

const CodeBlock = ({code}) => {
  const {chosenTopic, setChosenTopic} = useContext(chosenTopicContext)
  const [isEditable, setIsEditable] = useState(false)
  let textAreaStyle = {background:'#666', border:'none', color:'#FFF', padding:'2rem', minHeight:'300px'}

  useEffect(() => {
    (isEditable && document.addEventListener("click", handleOutsideClick))
    return () => {document.removeEventListener("click", handleOutsideClick)}
  }, [isEditable])


  const handleOutsideClick = (e) => {
    if(e.target.classList.contains("code-edit")) return;
    setIsEditable(false)
  }

  const editCode = (newCode) => {
    const topicUpdate = {...chosenTopic}
    topicUpdate.code = newCode
    setChosenTopic(topicUpdate)
    setIsEditable(false)
  }

  const enterEditState = () => {
    const codeBlock = document.querySelector('#codeblock')
    codeBlock && console.log(codeBlock.getBoundingClientRect());
    console.log('yo')
    setIsEditable(!isEditable)
  }

  return (
  !isEditable? 
  <div className="codeblock" id="codeblock">
    <pre>
      <code id ="code">
        {code ? code : ''}
      </code>
      <ModifierBtn
        modType="Edit" 
        onClick={() => setIsEditable(!isEditable)}
      />
    </pre>
  </div> : 
  <>
    <textarea 
      id="code-edit" 
      className="code-edit" 
      defaultValue={code} 
      style={textAreaStyle}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          setIsEditable(false);
          editCode(e.target.value)
    }}}
    ></textarea>
    <ModifierBtn
        modType="Edit" 
        onClick={() => enterEditState()}
    />
  </>
  )
}

export default CodeBlock
