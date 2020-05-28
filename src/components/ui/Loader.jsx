import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
import Row from 'react-bootstrap/Row'

import './styles.css'

const Loader = () => {
    return (
        <Row className="justify-content-center align-items-center loader">
          <PacmanLoader color={"#808080"}/>
        </Row>
    )}

export default Loader
