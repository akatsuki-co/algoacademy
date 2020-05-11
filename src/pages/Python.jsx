import React, {useState, useEffect} from "react"
import Sidebar from "../components/Sidebar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Content from "../components/Content"
import routes from "../docs/python"

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

export default Python
