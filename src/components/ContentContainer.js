import React, {useContext, useEffect} from 'react'
import ModifierBtn from './ModifierBtn'
import Note from './Note'
import CodeBlock from './CodeBlock'
import {chosenTopicContext} from './Main'

const ContentContainer = (props) => {
  const {chosenTopic} = useContext(chosenTopicContext)
  const {title, code, description, notes} = chosenTopic
  const { 
        noteAdded, 
        setNoteAdded,
        setNotes
      } = props

  const log = ()=>{
    console.log('added')
  }

  const editNote = (id, newNoteText) => {
    if (!newNoteText) return
    const newNotes = [...notes]
    newNotes[id] = newNoteText
    setNotes(newNotes)
  }

  const addNote = () => {
    const newNotes = [...notes]
    newNotes.push("temp")
    setNotes(newNotes)
    localStorage.setItem("notes", newNotes)
  }

 
 

  return (
    <div className="content-container fill-container ">
      <div className="content-wrapper fill-container">

        {(title && <h3 className="topic-title" id="topic-title">{title}</h3>
        )}
        {(description && <p className="description tabbed" id="content-description">
          {description}
          {( chosenTopic !== 'none' && <ModifierBtn 
                                          modType="Edit" 
                                          onClick={log}/> )}
          </p>
        )}
        <div className="line"></div>
        {(notes && <h4 className="notes" id="notes-title">Notes</h4>)}
        <ul className="topic-notes tabbed" id="notes">
          {(notes && notes.map((note, i) => {
              return <Note 
                        note={note} 
                        key={i} 
                        id={i} 
                        editNote={editNote} 
                        noteAdded={noteAdded} 
                        setNoteAdded={setNoteAdded} 
                      />
          }))}
          {(chosenTopic !== 'none' && <ModifierBtn 
                                          modType="Add" 
                                          addNote={addNote}/>
          )}
        </ul>
          {(code && <CodeBlock 
                      code={code} 
                      log={log} />
          )}

      </div>
  </div>
  )
}

export default ContentContainer
