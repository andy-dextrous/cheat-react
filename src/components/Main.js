import React, { useState } from 'react'
import Sidebar from './Sidebar'
import AddInfoBtn from './AddInfoBtn'
import ContentContainer from './ContentContainer'
// import {createId} from './../utilities/CreateId' 
export const chosenTopicContext = React.createContext()

const Main = ({topicData}) => {
  const [chosenTopic, setChosenTopic] = useState('none')
  const [notes, setNotes] = useState([])

  function chooseTopic(id) {
    topicData.forEach(parentTopic => {
      if (parentTopic.subTopics.length === 0) return;
      return parentTopic.subTopics.forEach(subTopic=>{
        return subTopic.properties.forEach((property) => {
          if(property.id === id) {
            setChosenTopic(property)
            setNotes(property.notes)
            }
        })
      })
    })
  }

  return (

      <main className="full-screen-restrict">
        <div className="wrapper fill-container flex">
          <chosenTopicContext.Provider value={{chosenTopic, setChosenTopic}}>
            <Sidebar 
              topicData={topicData} 
              handleClick={chooseTopic} 
              />
            <ContentContainer 
              setNotes={setNotes} 
              notes={notes}
              />
          </chosenTopicContext.Provider>
        </div>
        <AddInfoBtn />
      </main>

  )
}

export default Main

