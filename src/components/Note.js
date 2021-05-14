import React, {useState, useEffect, useContext} from 'react'
import ModifierBtn from './ModifierBtn'
import {chosenTopicContext} from './Main'

const Note = (props) => {
  const {chosenTopic, setChosenTopic} = useContext(chosenTopicContext)

  const {note, editNote, id} = props
  const [isEditable, setIsEditable] = useState(false)
  useEffect(()=>{console.log(chosenTopic)}, [chosenTopic])
  

  return (
    !isEditable ? 
    <li>
      {note}
      <ModifierBtn 
        modType="Edit" 
        editNote={editNote} 
        isEditable={isEditable} 
        onClick={setIsEditable}
      />
    </li> :
    <input 
        className="noteInput"
        type="text" 
        defaultValue={note}
        placeholder={note} 
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            setIsEditable(false);
            // editNote(id, e.target.value)
    }}}
    />
  )
}

export default Note
