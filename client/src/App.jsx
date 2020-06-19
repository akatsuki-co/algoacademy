import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/partials/Navigation'
import Footer from './components/partials/Footer'
import pages from './pages'
import shortid from 'shortid'

import './App.css'

const App = () => {
  const allPages = pages.map(({ path, exact, components }) => {
    return (
      <Route path={path} exact={exact} key={shortid.generate()}>
        {components}
      </Route>
    )
  })

  return (
    <div className="App">
      <Navigation></Navigation>
      <Switch>{allPages}</Switch>
      <Footer></Footer>
    </div>
  )
}

export default App
