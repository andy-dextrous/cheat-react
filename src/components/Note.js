import React, {useState, useContext, useEffect} from 'react'
import ModifierBtn from './ModifierBtn'
import {chosenTopicContext} from './Main'

const Note = (props) => {
  const {chosenTopic, setChosenTopic} = useContext(chosenTopicContext)
  const {notes} = chosenTopic
  const {note, id, addButton} = props
  const [isEditable, setIsEditable] = useState(false)

  useEffect(() => {
    (isEditable && document.addEventListener("click", handleOutsideClick))
    return () => {document.removeEventListener("click", handleOutsideClick)}
  }, [isEditable])

  const handleOutsideClick = (e) => {
    if(!e.target.classList.contains("text-input"))
    setIsEditable(false)
  }

  const editNote = (id, newNoteText) => {
    if (!newNoteText) return
    const newNotes = [...notes]
    newNotes[id] = newNoteText
    const newTopic = {...chosenTopic}
    newTopic.notes = newNotes
    setChosenTopic(newTopic)
  }

  const addNote = () => {
    console.log('added')
    const newNote = 'Add note'
    const newNotes = [...notes,newNote]
    const newTopic = {...chosenTopic}
    newTopic.notes = newNotes
    setChosenTopic(newTopic)
  }


  return (
    !isEditable ? 
    <li>
      {note}
      <ModifierBtn 
        modType="Edit" 
        isEditable={isEditable} 
        onClick={()=>setIsEditable(true)}
      />
      {addButton && 
        <ModifierBtn
        modType="Add" 
        onClick={addNote}
        />}
    </li> :
    <input 
        className="text-input"
        type="text" 
        defaultValue={note}
        placeholder={note} 
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log(e)
            setIsEditable(false);
            editNote(id, e.target.value)
    }}}
    />
  )
}

export default Note
