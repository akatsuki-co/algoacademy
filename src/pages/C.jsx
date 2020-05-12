import React, { useState } from "react"
import Sidebar from "../components/Sidebar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Content from "../components/Content"

const C = () => {
  const tableOfContents = {
    language: "c",
    sidebar: [
      {
        menu: "Basics",
        subMenu: [
          "Hello World",
          "Data Types",
          "Looping",
          "Arrays",
          "Structures",
          "Functions",
          "Pointers",
          "Bit Manipulation",
        ],
      },
      {
        menu: "Data Structures",
        subMenu: [
          "Linked Lists",
          "Stacks",
          "Queues",
          "Hash Tables",
          "Sets",
          "Binary Trees",
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

  return (
    <section className='py-3'>
      <Container>
        <Row>
          <Sidebar setMarkdownFile={setMarkdownFile} data={tableOfContents}></Sidebar>
          <Content markdownFile={markdownFile} data={tableOfContents}></Content>
        </Row>
      </Container>
    </section>
  )
}

export default C
