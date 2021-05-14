import React from 'react'
import Property from './Property'

const SubTopic = ({subTopic, handleClick}) => {

const properties = subTopic.properties

  return (
    <div className="wrapper">
      <div className="topic">
        <div className="open-icon-container flex-center">
          <svg className="open-icon" viewBox="0 0 20 20">
            <path
              d="M15 10c0 .3-.305.515-.305.515l-8.56 5.303c-.625.41-1.135.106-1.135-.67V4.853c0-.777.51-1.078 1.135-.67l8.56 5.305S15 9.702 15 10z">
            </path>
          </svg>
        </div>
        <a href="/" onClick={(e) => {e.preventDefault()}}>
          <p className="topic-title">{subTopic.name}</p>
        </a>
      </div>
      <div className="property-container hidden">
        {properties.map(property=> {
            return <Property 
              key={property.id} 
              property={property} 
              handleClick={handleClick} />
        })}
      </div>
    </div>
  )
}

export default SubTopic
