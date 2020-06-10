import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Content from '../components/content/Content'
import { Switch, Route } from 'react-router-dom'

const C = () => {
  const tableOfContents = {
    language: 'c',
    sidebar: [
      {
        menu: 'Basics',
        subMenu: [
          'Hello World',
          'Data Types',
          'Looping',
          'Arrays',
          'Structures',
          'Functions',
          'Pointers',
          'Bit Manipulation',
        ],
      },
      {
        menu: 'Data Structures',
        subMenu: [
          'Linked Lists',
          'Stacks',
          'Queues',
          'Hash Tables',
          'Sets',
          'Binary Trees',
          'Heaps',
        ],
      },
      {
        menu: 'Algorithms',
        subMenu: ['Sorting', 'Searching'],
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
              path="/c/:topic"
              render={(props) => <Content {...props} language="c" />}
            />
            <Route
              path="/"
              render={(props) => (
                <Content {...props} language="c" defaultTopic="helloWorld" />
              )}
            />
          </Switch>
        </Row>
      </Container>
    </section>
  )
}

export default C
