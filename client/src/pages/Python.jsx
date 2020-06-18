import React, { useState, useEffect }from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Content from '../components/content/Content'
import { Switch, Route } from 'react-router-dom'

import fetchTable from '../utils/fetchTable'

const Python = () => {
    const [table, setTable] = useState([])

    useEffect(() => {
        const fetchT = async () => {
            try {
                const menu = await fetchTable("python")
                setTable(menu.data[0])
                console.log("In Python useEffect")
                console.log(menu.data)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchT()
    }, []);

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
