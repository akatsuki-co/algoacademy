import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router'
import HighlightedMarkdown from '../highlighted_markdown/HighlightedMarkdown'

import './styles.css'
import Loader from '../ui/Loader'

const Content = ({ table }) => {
  let { topic } = useParams()
  const [markdown, setMarkdown] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [is404, setIs404] = useState(false)

  useEffect(() => {
    async function getMarkdown() {
      try {
        setIsLoading(true)
        setIs404(false)
        const mdFileName = topic || 'hello_world'
        const file = await import(
          `../../docs/${table.language}/${mdFileName}.md`
        )
        const response = await fetch(file.default)
        const text = await response.text()
        setIsLoading(false)
        setMarkdown(text || '### Nothing here yet! Come back again soon!')
      } catch (err) {
        setIsLoading(false)
        setIs404(true)
      }
    }
    getMarkdown()
  }, [table, topic])

  return (
    <Col
      md='7'
      xl='8'
      className='ml-md-auto py-3 pl-5 border-left'
      id='content'>
      {isLoading ? (
        <Loader />
      ) : is404 ? (
        <img src='/404.png' className='img-fluid'></img>
      ) : (
        <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
      )}
    </Col>
  )
}

export default Content
