import React, { useState } from "react"
import Sidebar from "../components/Sidebar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Content from "../components/Content"

const Golang = () => {
  const tableOfContents = {
    language: "golang",
    sidebar: [
        {
          menu: "Basics",
          subMenu: [
            "Hello World",
            "Data Types",
            "Variables",
            "Loops",
            "Pointers",
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

export default Golang
