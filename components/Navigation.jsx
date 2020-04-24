import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

const Navigation = () => (
  <div className='gradient'>
    <Container>
      <Navbar variant='light' expand='md'>
        <Navbar.Brand href='/' className='d-flex align-items-center'>
          <img src='/favicon.png' width='25' height='25'></img>
          <span className='ml-2'>Study Buddy</span>
        </Navbar.Brand>
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
                className='mr-sm-2'
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
