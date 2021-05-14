import React, {useContext, useState, useEffect} from 'react'
import ModifierBtn from './ModifierBtn'
import {chosenTopicContext} from './Main'

const Description = ({description}) => {
  const {chosenTopic, setChosenTopic} = useContext(chosenTopicContext)
  const [isEditable, setIsEditable] = useState(false)
  
  useEffect(() => {
    (isEditable && document.addEventListener("click", handleOutsideClick))
    return () => {document.removeEventListener("click", handleOutsideClick)}
  }, [isEditable])

  const handleOutsideClick = (e) => {
    if(!e.target.classList.contains("text-input"))
    setIsEditable(false)
  }

  const editDescription = (newDescr) => {
    const topicUpdate = {...chosenTopic}
    topicUpdate.description = newDescr
    setChosenTopic(topicUpdate)
    setIsEditable(false)
  }

  return (
      !isEditable ?
      <p className="description tabbed" id="content-description">
          {description} 
            <ModifierBtn 
              modType="Edit" 
              onClick={() => setIsEditable(true)}
            /> 
      </p> :
      <>
        <input 
          type="text"
          className="text-input"
          defaultValue={description}
          name="description-edit" 
          id="description-edit"  
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsEditable(false);
              editDescription(e.target.value)
        }}}>
        </input>
      </>
  )
}

export default Description
