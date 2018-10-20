import React from 'react'

const ContentTable = ({ id, name, email, openModal }) => (
  <tr onClick={() => openModal(id)}>
    <td className="text-left">{name}</td>
    <td className="text-left">{email}</td>
  </tr>
)

export default ContentTable

