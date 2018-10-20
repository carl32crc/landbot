import React from 'react'

const ContentTable = ({ id, name, email, onBlur, onHandleChange, onKeyPress, openModal }) => (
  <tr onClick={(e) => openModal(id, e)}>
    <td className="text-left">
      <input 
        defaultValue={name}
        onBlur={() => onBlur(name)} 
        onChange={(e) => onHandleChange(id, 'name', e.target.value)} 
        onKeyPress={(e) => onKeyPress(e, name)} 
        type='text' 
      />
    </td>
    <td className="text-left">{email}</td>
  </tr>
)

export default ContentTable

