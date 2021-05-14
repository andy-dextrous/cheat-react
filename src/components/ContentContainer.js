import React, {useContext} from 'react'
import ModifierBtn from './ModifierBtn'
import Note from './Note'
import CodeBlock from './CodeBlock'
import {chosenTopicContext} from './Main'
import Description from './Description'

const ContentContainer = () => {
  const {chosenTopic} = useContext(chosenTopicContext)
  const {title, code, description, notes} = chosenTopic

  const log = ()=>{
    console.log('added')
  }

  return (
    <div className="content-container fill-container ">
      <div className="content-wrapper fill-container">
        {( title && <h3 className="topic-title" id="topic-title">{title}</h3> )}
        {( description && <Description description={description} /> )}
        <div className="line"></div>
        {( notes && <h4 className="notes" id="notes-title">Notes</h4> )}
        <ul className="topic-notes tabbed" id="notes">
          {( notes && notes.map((note, i) => {
              return ( <Note 
                        note={note} 
                        key={i} 
                        id={i}
                        addButton={i !== notes.length - 1 ? false : true}   
                      /> )
            }) 
          )}
        </ul> 
          {( code && <CodeBlock 
                      code={code} 
                      log={log} />
          )}
      </div>
  </div>
  )
}

export default ContentContainer
