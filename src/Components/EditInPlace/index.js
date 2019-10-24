import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

const EditInPlace = ({value, onChangeValue}) => {
  const inputRef = useRef(null);
  const [ isEditing, setIsEditing ] = useState(false);
  
  const edit = () => setIsEditing(true);
  const done = () => {
    onChangeValue(inputRef.current.value)
    setIsEditing(false);
  }

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus()
    }
  }, [isEditing])

  if (isEditing) 
    return (
      <input 
        type="text" 
        dafaultvalue={value} 
        onBlur={done} 
        ref={inputRef} 
      />
    )
  return (
    <h1 
      className="edit-in-place"
      onClick={edit}
    >
     {value}
    </h1>
  )
}

export default EditInPlace;