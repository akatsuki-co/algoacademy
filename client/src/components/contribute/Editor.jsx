import React from 'react'

import './styles.css'

const Editor = ({ markdown, setMarkdown, contribution, setContribution }) => {
  return (
    <div class="editor col-lg">
      <h2 className="text-center py-1">Editor</h2>
      <div className="editor-container">
        <textarea
            onChange={(e) => {
                setMarkdown(e.target.value)
                setContribution({ ...contribution, 'markdown': e.target.value })
            }}
          value={markdown}
        />
      </div>
    </div>
  )
}

export default Editor
