import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

export const TextArea = ({value, onChangeValue, viewAs}) => {
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

  if (isEditing) {
    return <textarea type="text" onBlur={done} ref={inputRef}>{value}</textarea>
  }
  
  return React.createElement(viewAs || 'div',{
    onClick: edit,
    className: 'edit-in-place',
    children: value
  })
  
}

export const Input = ({value, onChangeValue, viewAs}) => {
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

  if (isEditing) {
    return <input type="text" defaultValue={value} onBlur={done} ref={inputRef} />
  }
  
  return React.createElement(viewAs || 'div',{
    onClick: edit,
    className: 'edit-in-place',
    children: value
  })
  
}

export default Input;