import React from 'react'
import Sidebar from '../components/Sidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Content from '../components/Content'
import { Switch, Route } from 'react-router-dom'

const Go = () => {
  const tableOfContents = {
    language: 'go',
    sidebar: [
      {
        menu: 'Basics',
        subMenu: [
          'Hello World',
          'Data Types',
          'Variables',
          'Loops',
          'Pointers',
          'Arrays',
          'Slices',
          'Maps',
          'Structs',
          'Interfaces',
          'Goroutines and Channels',
        ],
      },
      {
        menu: 'Data Structures',
        subMenu: [
          'Linked Lists',
          'Stacks and Queues',
          'Hash Tables',
          'Sets',
          'Trees',
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
              path="/go/:topic"
              render={(props) => <Content {...props} language="go" />}
            />
            <Route
              path="/"
              render={(props) => (
                <Content {...props} language="go" default_topic="hello_world" />
              )}
            />
          </Switch>
        </Row>
      </Container>
    </section>
  )
}

export default Go
