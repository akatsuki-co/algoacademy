import React, { useState } from "react"
import Sidebar from "../components/Sidebar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Content from "../components/Content"

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
  const [markdownFile, setMarkdownFile] = useState('HelloWorld')
  const [clicked, setClicked] = useState(true)


  return (
    <section className='py-3'>
      <Container>
        <Row> 
          <Sidebar clicked={clicked} setClicked={setClicked} setMarkdownFile={setMarkdownFile} data={tableOfContents}></Sidebar>
          <Content clicked={clicked} markdownFile={markdownFile} data={tableOfContents}></Content>
        </Row>
      </Container>
    </section>
  )
}

export default Python
