
import React from 'react'
import { Row, Col, Button, Container, Nav, NavDropdown, Navbar, Form, FormControl } from "react-bootstrap";
import { useState } from "react"


function Navigation({ products, handleGetData, handleSearch }) {
  const [data, setData] = useState([])
  const handleGet = (id) => {
    handleGetData(id)
  }
  const handleChange = () => {
    handleSearch(data)
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <NavDropdown title="Products" id="navbarScrollingDropdown">
                {products.map((item, index) => (

                  <NavDropdown.Item key={index} href="#action3" onClick={() => handleGet(item.id)}>{item.name}</NavDropdown.Item>


                ))}
              </NavDropdown>

            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setData(e.target.value)}
              />
              <Button variant="outline-success" type='button' onClick={handleChange}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation