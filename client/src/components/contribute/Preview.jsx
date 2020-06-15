import React from 'react'
import HighlightedMarkdown from '../highlighted_markdown/HighlightedMarkdown'

import './styles.css'

const Preview = ({ markdown }) => {
  return (
    <div className="preview col-lg">
      <h2 className="text-center py-1">Preview</h2>
      <div className="preview-container">
        <HighlightedMarkdown>{markdown}</HighlightedMarkdown>
      </div>
    </div>
  )
}

export default Preview
