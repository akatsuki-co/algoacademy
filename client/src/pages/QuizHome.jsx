import React from 'react'
import Container from 'react-bootstrap/Container'
import QuizCard from '../components/quiz/QuizCard'
import Row from 'react-bootstrap/Row'
import { Switch, Route } from 'react-router-dom'
import Quiz from '../components/quiz/Quiz'
import shortid from 'shortid'

const QuizHome = () => {
  const quizzes = [
    {
      title: 'Python',
      quizId: 'python',
      quizText:
        'This quiz goes over foundational knowledge of Python syntax, builtins, popular libraries, and OOP design.',
      quizImage: '/python.png',
      totalQuestions: '25',
    },
    {
      title: 'React',
      quizId: 'react',
      quizText:
        'This quiz goes modern React design, hooks and state management.',
      quizImage: '/react.png',
      totalQuestions: '40',
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      quizId: 'ccp',
      quizText:
        'This quiz goes over AWS products, pricing, security and general cloud concepts.',
      quizImage: '/aws.png',
      totalQuestions: '60',
    },
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
              key={shortid.generate()}
              text={el.quizText}
              image={el.quizImage}
              questions={el.totalQuestions}
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
          <Route path="/quiz/:topic" component={Quiz}></Route>
          <Route path="/quiz" component={Home}></Route>
        </Switch>
      </Container>
    </section>
  )
}

export default QuizHome
