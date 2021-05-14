import React from 'react'
import Topic from './Topic'

const Sidebar = ({topicData, handleClick}) => {

  return (
 
    <aside className="sidebar" id="sidebar">
      <div className="search-container full-width flex-center">
        <input type="text" name="search" id="search" />
      </div>
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
