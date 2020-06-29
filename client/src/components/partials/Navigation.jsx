import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'

const Navigation = () => {
  const { activeUser } = useContext(UserContext)
  return (
    <div className='gradient'>
      <Container>
        <Navbar variant='light' expand='md'>
          <Link to='/'>
            <Navbar.Brand className='d-flex align-items-center'>
              <img
                src='/favicon.png'
                width='25'
                height='25'
                alt='favicon'></img>
              <span className='ml-2'>Algo Academy</span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='navbar-collapse' />
          <Navbar.Collapse id='navbar-collapse'>
            <Nav className='ml-auto'>
              <Nav.Link href='/quiz'>Quiz</Nav.Link>
              <Nav.Link>Contact Us</Nav.Link>
              {!activeUser ? (
                <>
                  <Nav.Link href='/login'>Log In</Nav.Link>
                  <Nav.Link href='/signUp'>Sign Up</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href='/contribute'>Contribute</Nav.Link>
                  <Nav.Link href='/logOut'>Log Out</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  )
}

export default Navigation
