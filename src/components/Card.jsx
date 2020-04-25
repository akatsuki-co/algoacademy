import React from "react"

import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"

import capitalize from "../utils/capitalize"

const Card = ({ language }) => (
  <Col md='4'>
    <Link to={`/${language}`} className='card p-5 border'>
      <div>
        <img
          width='100'
          height='100'
          src={`/${language}.png`}
          alt='language-logo'></img>
        <h4 className='my-4 card-language'>{capitalize(language)}</h4>
      </div>
    </Link>
  </Col>
)

export default Card
