import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import './styles.css'

const QuizCard = ({ title, id, text, image, questions }) => {
  let progress = 'Progress: '
  let quizResults = sessionStorage.getItem('python101')
  progress += quizResults || `0/${questions || 0}`
  return (
    <>
      <Card className="quizCard">
        <Card.Img src={image} className="img-fluid card-img"></Card.Img>
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/quiz/${id}`}>Take the Quiz!</Link>
          <br></br>
          <small className="text-muted">{progress}</small>
        </Card.Footer>
      </Card>
    </>
  )
}

export default QuizCard
