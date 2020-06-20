import React from 'react'
import shortid from 'shortid'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from './Card'

const Cards = () => {
  const languages = ['python', 'c', 'javascript', 'cpp', 'go', 'java']
  return (
    <section id='cards' className='py-3'>
      <Container>
        <Row className='text-center py-3'>
          {languages.slice(0, 3).map((language) => (
            <Card key={shortid.generate()} language={language} />
          ))}
        </Row>
        <Row className='text-center py-3'>
          {languages.slice(3, 6).map((language) => (
            <Card key={shortid.generate()} language={language} />
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Cards
