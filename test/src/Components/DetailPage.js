import React from 'react'
import { Card, Button } from "react-bootstrap"

function DetailPage({ getDetail }) {
  return (
    <div>
      {getDetail.map((item, index) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>Full name: {item.last_name + " " + item.first_name}</Card.Title>
            <Card.Text>Email: {item.email}</Card.Text>
            <Card.Text>
              Gender: {item.gender}
            </Card.Text>
            <Card.Text>
              Company: {item.companyId}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default DetailPage