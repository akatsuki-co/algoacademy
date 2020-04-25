import React from "react"

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

const Navigation = () => (
  <div className='gradient'>
    <Container>
      <Navbar variant='light' expand='md'>
        <Link to='/'>
          <Navbar.Brand className='d-flex align-items-center'>
            <img src='/favicon.png' width='25' height='25' alt="favicon"></img>
            <span className='ml-2'>Study Buddy</span>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls='navbar-collapse' />
        <Navbar.Collapse id='navbar-collapse'>
          <Nav className='mr-auto'>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>F.A.Q.</Nav.Link>
            <Nav.Link>Contribute</Nav.Link>
          </Nav>
          <Nav className='ml-auto' id='search-form'>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
              />
              <Button variant='outline-primary'>Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </div>
)

export default Navigation
