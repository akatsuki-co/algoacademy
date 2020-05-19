import React from 'react'
import Container from 'react-bootstrap/Container'
import QuizCard from '../components/QuizCard'
import Row from 'react-bootstrap/Row'
import { Switch, Route } from 'react-router-dom'
import Quiz from '../components/Quiz'

const QuizHome = () => {
  const quizzes = [
    {
      title: 'Python basics',
      quizId: 1,
    },
    { title: 'Python intermediate', quizId: 2 },
    { title: 'Python advanced', quizId: 3 },
  ]
  const Home = () => {
    return (
      <>
        <h2 className="text-center">Test Your Knowledge!</h2>
        <Row className="justify-content-md-center">
          {quizzes.map((el) => (
            <QuizCard
              title={el.title}
              id={el.quizId}
              key={el.quizId}
            ></QuizCard>
          ))}
        </Row>
      </>
    )
  }

  return (
    <section id="quizHome" className="py-5">
      <Container>
        <Switch>
          <Route path="/quiz/:id" component={Quiz}></Route>
          <Route path="/quiz" component={Home}></Route>
        </Switch>
      </Container>
    </section>
  )
}

export default QuizHome
