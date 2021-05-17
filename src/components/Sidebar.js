import React, {useContext} from 'react'
import Topic from './Topic'
import Search from './Search'
import {topicDataContext} from './Main'


const Sidebar = ({handleClick}) => {
const topicData = useContext(topicDataContext)
  console.log(topicData)
  return (
 
    <aside className="sidebar" id="sidebar" style={{position:"relative"}}>
      <Search />
      <div className="topic-container">
          { topicData.map(topic => 
            { return <Topic 
                        key={topic.id} 
                        topicData={topic} 
                        handleClick={handleClick} /> 
            }) 
          }
      </div>
    </aside>
  )
}

export default Sidebar
