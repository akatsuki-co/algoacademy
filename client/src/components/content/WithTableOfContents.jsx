import React, { useState, useEffect } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Content from './Content'
import fetchTable from '../../utils/fetchTable'
import { Switch, Route } from 'react-router-dom'
import Loader from '../ui/Loader'

const WithTableOfContents = ({ path }) => {
  const initialState = {
    sidebar: [],
    language: '',
  }
  const [isLoading, setIsLoading] = useState(true)
  const [table, setTable] = useState(initialState)
  useEffect(() => {
    const loadContents = async () => {
      try {
        const req = await fetchTable(path)
        const { sidebar, language } = req.data[0]
        setTable(() => {
          return { sidebar, language }
        })
        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    loadContents()
  }, [path])

  return isLoading ? (
    <Loader />
  ) : (
    <section className='py-3'>
      <Container>
        <Row>
          <Sidebar data={table}></Sidebar>
          <Switch>
            <Route
              path={`/${table.language}/:topic`}
              render={() => <Content table={table} />}
            />
            <Route path='/' render={() => <Content table={table} />} />
          </Switch>
        </Row>
      </Container>
    </section>
  )
}

export default WithTableOfContents
