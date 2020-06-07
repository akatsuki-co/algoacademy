import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header = () => (
  <header className="gradient py-5">
    <Container>
      <Row className="align-items-center">
        <Col lg="6" className="header-text">
          <h1>Welcome to Algo Academy!</h1>
          <p className="lead my-5">
            Are you preparing for a technical interview? Do you want to learn a
            new programming language? Need to review data structures and
            algorithms? Look no further; this is your one stop shop to help you
            learn and improve. To get started, pick a language!
          </p>
        </Col>
        <Col lg="5" className="ml-auto d-none d-lg-block">
          <img src="/header.png" alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  </header>
)

export default Header
