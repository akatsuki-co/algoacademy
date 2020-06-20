import React, { useEffect, useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Content from '../components/content/Content'
import { Switch, Route } from 'react-router-dom'
import fetchTable from '../utils/fetchTable'

const Go = () => {
  const initialState = {
    sidebar: [],
    language: '',
  }
  const [table, setTable] = useState(initialState)

  useEffect(() => {
    const loadContents = async () => {
      try {
        const req = await fetchTable('go')
        const { sidebar, language } = req.data[0]
        setTable(() => {
          return { sidebar, language }
        })
      } catch (err) {
        console.log(err)
      }
    }
    loadContents()
  }, [])
  return (
    <section className="py-3">
      <Container>
        <Row>
          <Sidebar data={table}></Sidebar>
          <Switch>
            <Route
              path="/go/:topic"
              render={(props) => <Content {...props} language="go" />}
            />
            <Route
              path="/"
              render={(props) => (
                <Content {...props} language="go" defaultTopic="helloWorld" />
              )}
            />
          </Switch>
        </Row>
      </Container>
    </section>
  )
}

export default Go
