import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const QuizCard = ({ title, id }) => {
  return (
    <>
      <Card className="quizCard">
        <Card.Img
          src="https://source.unsplash.com/random/600x400"
          className="img-fluid"
        ></Card.Img>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
              illo?
            </p>
            <Link to={`/quiz/${id}`}>Take the Quiz!</Link>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Progress 0/3</small>
        </Card.Footer>
      </Card>
    </>
  )
}

export default QuizCard
