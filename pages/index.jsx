import Layout from "../components/Layout"
import Header from "../components/Header"
import Cards from "../components/Cards"

const Index = () => (
  <Layout>
    <Header></Header>
    <main>
      <section className='py-3'>
        <Cards></Cards>
      </section>
    </main>
  </Layout>
)

export default Index
