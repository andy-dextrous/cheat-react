import React from 'react'

const ModifierBtn = ({modType, onClick}) => {

  return (
    <button 
      className="edit" 
      onClick={onClick}
    >
      {modType}
    </button>
  )
}

export default ModifierBtn
