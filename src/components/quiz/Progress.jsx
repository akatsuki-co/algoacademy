import React from 'react'

import './styles.css'

function Progress({ current, total }) {
  return (
    <h2>
      Question {current} of {total}
    </h2>
  )
}

export default Progress
