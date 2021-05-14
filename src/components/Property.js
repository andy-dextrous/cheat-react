import React from 'react'

const Property = ({property, handleClick}) => {

  return (
    <div className="property" onClick={() => {handleClick(property.id)}}>
      <p>
        {property.title}
      </p>
    </div>
  )
}

export default Property
