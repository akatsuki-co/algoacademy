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

  useEffect(() => {
    async function getMarkdown() {
      try {
        setIsLoading(true)
        const mdFileName = topic || 'hello_world'
        const file = await import(
          `../../docs/${table.language}/${mdFileName}.md`
        )
        const response = await fetch(file.default)
        const text = await response.text()
        setIsLoading(false)
        setMarkdown(text || '### Nothing here yet! Come back again soon!')
      } catch {
        setIsLoading(false)
        setMarkdown('### Path Not found. Please try again.')
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
      ) : (
        <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
      )}
    </Col>
  )
}

export default Content
