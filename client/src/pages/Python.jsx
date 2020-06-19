import React, { useState, useEffect } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Content from '../components/content/Content'
import { Switch, Route } from 'react-router-dom'

import fetchTable from '../utils/fetchTable'

const Python = () => {
  const initialState = {
    sidebar: [],
    language: '',
    }  
      
  const [table, setTable] = useState(initialState)

  useEffect(() => {
    const fetchT = async () => {
      try {
        const tempTable = await fetchTable('python')
        const { sidebar, language } = tempTable.data[0]
        setTable(() => {
          return { sidebar, language }
        })
      } catch (err) {
        console.log(err)
      }
    }
    fetchT()
  }, [])

  return (
    <section className="py-3">
      <Container>
        <Row>
          <Sidebar data={table}></Sidebar>
          <Switch>
            <Route
              path="/python/:topic"
              render={(props) => <Content {...props} language="python" />}
            />
            <Route
              path="/"
              render={(props) => (
                <Content
                  {...props}
                  language="python"
                  defaultTopic="helloWorld"
                />
              )}
            />
          </Switch>
        </Row>
      </Container>
    </section>
  )
}

export default Python
