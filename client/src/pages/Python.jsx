import React, { useState, useEffect }from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Content from '../components/content/Content'
import { Switch, Route } from 'react-router-dom'

const Python = ({fetchTable}) => {
  const [tableOfContents, setTableOfContents] = useState({})

  useEffect(() => {
      const table = fetchTable("python")
      setTableOfContents(table)
      console.log(table)
  }, [fetchTable]);


  return (
    <section className='py-3'>
      <Container>
        <Row>
          <Sidebar data={tableOfContents}></Sidebar>
          <Switch>
            <Route
              path='/python/:topic'
              render={(props) => <Content {...props} language='python' />}
            />
            <Route
              path='/'
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
