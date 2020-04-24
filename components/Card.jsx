import Link from "next/link"
import Col from "react-bootstrap/Col"
import capitalize from "../utils/capitalize"

const Card = ({ language }) => (
  <Col md='4'>
    <Link href={language}>
      <a className='card p-5 border'>
        <div>
          <img width='100' height='100' src={`/${language}.png`}></img>
          <h4 className='my-4'>{capitalize(language)}</h4>
        </div>
      </a>
    </Link>
  </Col>
)

export default Card
