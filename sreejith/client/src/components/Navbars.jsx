import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Navbars() {
  return (
<Navbar expand="lg" bg="dark" variant="dark" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/">
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
              <Nav.Link href="/" >Home</Nav.Link>
              <Nav.Link href="/register" >Register</Nav.Link>
              {/* <Nav.Link href="/add-plan" >Add Plan</Nav.Link>
              <Nav.Link href="/vedio-list" >Vedios</Nav.Link>
              <Nav.Link href="/all-plan" >Plans</Nav.Link> */}
              
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>  )
}
