import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import { BrowserRouter } from "react-router-dom"


const ContentLayout = ({ children }) => {
  return (
    <Layout>
      <section className='py-3'>
        <Container>
          <Row>
            <BrowserRouter>{children}</BrowserRouter>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default ContentLayout
