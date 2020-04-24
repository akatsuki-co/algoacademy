import useSwr from "swr"
import Layout from "../components/Layout"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Sidebar from "../components/Sidebar"
import Content from "../components/Content"
import fetcher from "../utils/fetcher"
import { BrowserRouter } from "react-router-dom"
import routes from "../docs/python"

const Python = () => {
  const { data, error } = useSwr("/api/python", fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <Layout>
      <section className='py-3'>
        <Container>
          <Row>
            <BrowserRouter>
              <Sidebar data={data}></Sidebar>
              <Content routes={routes}></Content>
            </BrowserRouter>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default Python
