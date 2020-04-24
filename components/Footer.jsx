import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab)

const Footer = () => (
  <footer className='gradient pt-3'>
    <Container className='py-3'>
      <Row className='justify-content-between'>
        <Col md='6'>
          <div className='copyright'>
            <p>
              © 2020 By
              <a href='https://github.com/tuvo1106' className='text-muted'>
                {" Tu Vo "}
              </a>
              &amp;
              <a href='https://github.com/rmiyazaki6499' className='text-muted'>
                {" Ryuichi Miyazaki "}
              </a>
            </p>
          </div>
        </Col>
        <Col md='1'>
          <div className='d-flex justify-content-between'>
            <a href='https://twitter.com/'>
              <FontAwesomeIcon icon={["fab", "twitter"]} color='gray' />
            </a>
            <a href='https://github.com'>
              <FontAwesomeIcon icon={["fab", "github"]} color='gray' />
            </a>

            <a href='https://instagram.com/'>
              <FontAwesomeIcon icon={["fab", "instagram"]} color='gray' />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
