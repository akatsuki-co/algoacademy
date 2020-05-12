import React, {useState, useEffect} from 'react'
import Col from "react-bootstrap/Col"
import { Switch, Route } from "react-router-dom"
import shortid from 'shortid'

import HighlightedMarkdown from "./HighlightedMarkdown"


const Content = ({data, markdownFile}) => {
    const [markdown, setMarkdown] = useState(`Nothing here yet!`);
    const [clicked, setClicked] = useState(true)

    useEffect(() => {
        getMarkdown();
}, [clicked]);

  const getMarkdown = async () => {
    const language = data.language
    const markdownFileName = markdownFile.replace(/\s+/g, '')
    const file = await import(`../docs/${language}/${markdownFileName}.md`);
    const response = await fetch(file.default);
    let text = await response.text();
      if (text == "") {
          text = "# Nothing here yet! Come back again soon!"
      }
    setMarkdown(text);
    setClicked(!clicked)
  };
  return (
    <Col md="7" xl="8" className='ml-md-auto py-3 pl-5 border-left' id="content">
        <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
    </Col>
  )
}

export default Content
