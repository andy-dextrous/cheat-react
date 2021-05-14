import React from 'react'
import SubTopic from './SubTopic'


const Topic = ({topicData, handleClick}) => {

  const subTopics = topicData.subTopics
  const topicTitle = topicData.name
  const image = topicData.image

  const openChildContainer = (parent) => {
    const container = parent.target.nextSibling;
    if (!container) return
      container.classList.contains('hidden') ? 
      container.classList.remove('hidden') : container.classList.add('hidden')
  }

  return (
    <div className="wrapper topic-wrap" onClick={(e) => {openChildContainer(e)}}>
      <div className="topic">
        <img alt="" src={image.src} className="topic-image" />
        <div className="open-icon-container flex-center">
          <svg className="open-icon" viewBox="0 0 20 20">
            <path
              d="M15 10c0 .3-.305.515-.305.515l-8.56 5.303c-.625.41-1.135.106-1.135-.67V4.853c0-.777.51-1.078 1.135-.67l8.56 5.305S15 9.702 15 10z">
            </path>
          </svg>
        </div>
        <a href="/" onClick={(e) => {e.preventDefault()}}>
          <p className="topic-title">{topicTitle}</p>
        </a>
      </div>
      <div className="sub-topic-container hidden">
        {subTopics.map(subTopic=> {
          return <SubTopic 
            key={subTopic.id} 
            subTopic={subTopic} 
            handleClick={handleClick} 
          />})}
      </div>
    </div>
  )
}


export default Topic
