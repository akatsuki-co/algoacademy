import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Card from "./Card"
import shortid from 'shortid'

const Cards = () => {
  const languages = ["python", "c", "javascript", "c++", "golang", "java"]
  return (
    <section id="cards">
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
