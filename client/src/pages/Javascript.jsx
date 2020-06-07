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
          'Asynchronous Programming',
          'ES6',
          'Promises',
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
          'Graphs',
        ],
      },
      {
        menu: 'Algorithms',
        subMenu: ['Sorting', 'Searching', 'Recursion', 'DFS/BFS'],
      },
    ],
  }

  return (
    <section className="py-3">
      <Container>
        <Row>
          <Sidebar data={tableOfContents}></Sidebar>
          <Switch>
            <Route
              path="/javascript/:topic"
              render={(props) => <Content {...props} language="javascript" />}
            />
            <Route
              path="/"
              render={(props) => (
                <Content
                  {...props}
                  language="javascript"
                  default_topic="hello_world"
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
