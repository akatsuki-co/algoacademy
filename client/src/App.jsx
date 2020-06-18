import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/partials/Navigation'
import Cards from './components/cards/Cards'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'
import Python from './pages/Python'
import Go from './pages/Go'
import Cpp from './pages/C++'
import C from './pages/C'
import Javascript from './pages/Javascript'
import Contribute from './components/contribute/Contribute'
import QuizHome from './pages/QuizHome'

import './App.css'

const App = () => {

    async function fetchTable(language) {
        try {
            const results = await fetch("http://localhost:5000/api/v1/table/?language=" + language);
            const table = await results.json()
            return table
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(async () => {
        const menu = await fetchTable("python")
        console.log(menu.data)
    }, []);


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
                <Route path='/javascript'>
                    <Javascript />
                </Route>
                <Route path='/go'>
                    <Go />
                </Route>
                <Route path='/c++'>
                    <Cpp />
                </Route>
                <Route path='/c'>
                    <C />
                </Route>
                <Route path='/contribute'>
                    <Contribute />
                </Route>
                <Route path='/quiz'>
                    <QuizHome></QuizHome>
                </Route>
                <Route>
                    <h1 className='text-center py-5'>Page not found</h1>
                </Route>
            </Switch>
            <Footer></Footer>
        </div>
    )
}

export default App
