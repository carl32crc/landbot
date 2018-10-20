import React from 'react'

const Input = ({ id, field, value, onBlur, onHandleChange, onKeyPress }) => (
  <input 
    defaultValue={value}
    onBlur={() => onBlur(value)} 
    onChange={(e) => onHandleChange(id, field, e.target.value)} 
    onKeyPress={(e) => onKeyPress(e, value)} 
    type='text' 
  />
)

export default Input