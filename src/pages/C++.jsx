import React from "react"
import Sidebar from "../components/Sidebar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Content from "../components/Content"
import { Switch, Route  } from "react-router-dom"

const Cpp = () => {
  const tableOfContents = {
    language: "c++",
    sidebar: [
      {
        menu: "Basics",
        subMenu: [
          "Hello World",
          "Data Types",
          "Functions",
          "Structures",
          "Arrays",
          "Character Strings",
          "Pointers",
          "Bit Manipulation",
        ],
      },
      {
        menu: "Data Structures",
        subMenu: [
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
                    <Route path="/c++/:topic" render={(props) => <Content {...props} language="c++" />}/>
        <Route path="/" render={(props) => <Content {...props} language="c++" default_topic="hello_world"/>}/>
                </Switch>
                </Row>
              </Container>
            </section>
          
    )
}

export default Cpp
