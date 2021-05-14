import React from 'react'

const ModifierBtn = ({modType, onClick, addNote}) => {

  return (
    <button 
      className="edit" 
      onClick={() => {
        modType === 'Edit' ?
        onClick(isEditable => {return !isEditable}) :
        addNote()
        }}
    >
      {modType}
    </button>
  )
}

export default ModifierBtn
