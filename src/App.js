import React from "react"
import { Route, Switch } from "react-router-dom"
import Navigation from "./components/Navigation"
import Cards from "./components/Cards"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Python from "./pages/Python"
import Golang from "./pages/Golang"

import "./App.css"

function App() {
  return (
    <div className='App'>
      <Navigation></Navigation>
      <Switch>
        <Route path='/' exact>
          <Header></Header>
          <Cards></Cards>
        </Route>
        <Route path='/python'>
          <Python />
        </Route>
        <Route path='/golang'>
          <Golang />
        </Route>
        <Route>
          <h1 className='text-center'>Page not found</h1>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  )
}

export default App
