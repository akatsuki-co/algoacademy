import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Content from '../components/content/Content'
import { Switch, Route } from 'react-router-dom'

const Javascript = () => {
  const tableOfContents = {
    language: 'javascript',
    sidebar: [
      {
        menu: 'Basics',
        subMenu: [
          'Hello World',
          'Data Types',
          'Arrays',
          'Functions And Closures',
          'Higher Order Functions',
          'ES6 and Promises',
        ],
      },
      {
        menu: 'Data Structures',
        subMenu: [
          'Linked Lists',
          'Stacks and Queues',
          'Hash Tables',
          'Sets',
          'Binary Trees',
          'Heaps',
          'Tries',
          'Graphs',
        ],
      },
      {
        menu: 'Algorithms',
        subMenu: ['Sorting', 'Searching'],
      },
    ],
  }

  return (
    <section className='py-3'>
      <Container>
        <Row>
          <Sidebar data={tableOfContents}></Sidebar>
          <Switch>
            <Route
              path='/javascript/:topic'
              render={(props) => <Content {...props} language='javascript' />}
            />
            <Route
              path='/'
              render={(props) => (
                <Content
                  {...props}
<<<<<<< HEAD:client/src/pages/Javascript.jsx
                  language="javascript"
                  defaultTopic="helloWorld"
=======
                  language='javascript'
                  default_topic='hello_world'
>>>>>>> master:src/pages/Javascript.jsx
                />
              )}
            />
          </Switch>
        </Row>
      </Container>
    </section>
  )
}

export default Javascript
