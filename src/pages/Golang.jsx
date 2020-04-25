import React from "react"
import Sidebar from "../components/Sidebar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Content from "../components/Content"
import routes from "../docs/golang"

const Golang = () => {
  const tableOfContents = {
    language: "golang",
    sidebar: [
        {
          menu: "Basics",
          subMenu: [
            "Hello World",
            "Data Types",
            "Arrays",
            "Slices",
            "Maps",
            "Structs",
            "Interfaces",
            "Goroutines and Channels",
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
          <Content routes={routes}></Content>
        </Row>
      </Container>
    </section>
  )
}

export default Golang
