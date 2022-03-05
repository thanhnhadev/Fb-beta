import React from 'react'
import { Table } from "react-bootstrap"

function ListMember({ infor, handleDl }) {
  const handleDetail = (id) => {
    handleDl(id)
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {infor.map((item, index) => (
            <tr key={index} onClick={() => handleDetail(item.id)}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ListMember