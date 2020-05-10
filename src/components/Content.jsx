import React, {useState, useEffect} from 'react'
import Col from "react-bootstrap/Col"
import { Switch, Route } from "react-router-dom"
import shortid from 'shortid'

import HighlightedMarkdown from "./HighlightedMarkdown"


const Content = ({routes}) => {
  // const allRoutes = routes.map((route) => {
  //   return (
  //     <Route
  //       key={shortid.generate()}
  //       exact={route.exact}
  //       path={route.path}
  //       component={route.component} />
  //   )
  // })\
    const [markdown, setMarkdown] = useState(`Nothing here yet!`);

    useEffect(() => {
        getMarkdown();
}, []);

  const getMarkdown = async () => {
    const markdownFile = 'HelloWorld'; 
    const language = 'python'
    const file = await import(`../docs/${language}/${markdownFile}.md`);
    const response = await fetch(file.default);
    const text = await response.text();
    setMarkdown(text);
  };
  return (
    <Col md="7" xl="8" className='ml-md-auto py-3 pl-5 border-left' id="content">
        <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
    </Col>
  )
}

export default Content
