import React, { useState } from 'react'
import Sidebar from './Sidebar'
import AddInfoBtn from './AddInfoBtn'
import ContentContainer from './ContentContainer'
// import {createId} from './../utilities/CreateId' 
export const chosenTopicContext = React.createContext()
export const topicDataContext = React.createContext()

const Main = ({topicData}) => {
  const [chosenTopic, setChosenTopic] = useState('none')

  function chooseTopic(id) {
    topicData.forEach(parentTopic => {
      if (parentTopic.subTopics.length === 0) return;
      return parentTopic.subTopics.forEach(subTopic=>{
        return subTopic.properties.forEach((property) => {
          if(property.id === id) {
            setChosenTopic(property)
            }
        })
      })
    })
  }

  return (
    <topicDataContext.Provider value={topicData}>
      <chosenTopicContext.Provider value={{chosenTopic, setChosenTopic}}>
        <main className="full-screen-restrict">
          <div className="wrapper fill-container flex">
              <Sidebar 
                handleClick={chooseTopic} 
                />
              <ContentContainer />
          </div>
          <AddInfoBtn />
        </main>
      </chosenTopicContext.Provider>
    </topicDataContext.Provider>

  )
}

export default Main

