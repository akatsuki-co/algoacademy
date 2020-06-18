import React, { useState, useEffect }from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Content from '../components/content/Content'
import { Switch, Route } from 'react-router-dom'

import { fetchTable } from '../utils/fetchTable'

const Python = () => {
    const [table, setTable] = useState({})

    useEffect(async () => {
        const menu = await fetchTable("python")
        setTable(menu)
        console.log("In Python")
        console.log(menu)
        console.table(menu)
    });

    return (
        <section className='py-3'>
            <Container>
                <Row>
                    <Sidebar data={table}></Sidebar>
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
