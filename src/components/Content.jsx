import React from 'react'
import Col from "react-bootstrap/Col"
import { Switch, Route } from "react-router-dom"
import shortid from 'shortid'

const Content = ({routes}) => {
  const allRoutes = routes.map((route) => {
    return (
      <Route
        key={shortid.generate()}
        exact={route.exact}
        path={route.path}
        component={route.component} />
    )
  })
  return (
    <Col md="7" xl="8" className='ml-md-auto py-3 pl-5 border-left'>
      <Switch>
        {allRoutes}
      </Switch>
    </Col>
  )
}

export default Content
