import React from "react"
import Sidebar from "../components/Sidebar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Content from "../components/Content"
import { Switch, Route } from "react-router-dom"

const Python = () => {
  const tableOfContents = {
    language: "python",
    sidebar: [
      {
        menu: "Basics",
        subMenu: [
          "Hello World",
          "Data Types",
          "Lists",
          "Dictionaries",
          "Functions",
          "Comprehensions"
        ],
      },
      {
        menu: "Data Structures",
        subMenu: [
          "Collections",
          "Linked Lists",
          "Stacks and Queues",
          "Hash Tables",
          "Sets",
          "Trees",
          "Heaps",
          "Graphs",
        ],
      },
      {
        menu: "Algorithms",
        subMenu: ["Sorting", "Searching", "Recursion", "DFS/BFS"],
      },
    ],
  }

  return (
    <section className='py-3'>
      <Container>
        <Row> 
          <Sidebar data={tableOfContents}></Sidebar>
        <Switch>
            <Route path="/python/:topic" render={(props) => <Content {...props} language="python" />}/>
            <Route path="/" render={(props) => <Content {...props} language="python" default_topic="hello_world"/>}/>
        </Switch>
        </Row>
      </Container>
    </section>
  )
}

export default Python
