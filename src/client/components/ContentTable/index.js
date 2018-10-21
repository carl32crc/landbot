import React from 'react'
import Input from './../Input'

const ContentTable = ({ id, name, email, onBlur, onHandleChange, onKeyPress, openModal }) => (
  <tr className="prueba" onClick={(e) => openModal(id, e)}>
    <td className="text-left">
      <Input       
        field='name'
        id={id}
        onBlur={onBlur} 
        onHandleChange={onHandleChange} 
        onKeyPress={onKeyPress}
        value={name} 
      />
    </td>
    <td className="text-left">
      <Input 
        field='email'
        id={id}
        onBlur={onBlur} 
        onHandleChange={onHandleChange} 
        onKeyPress={onKeyPress}
        value={email} 
      />
    </td>
  </tr>
)

export default ContentTable