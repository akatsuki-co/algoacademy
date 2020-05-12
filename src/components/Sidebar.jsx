import React from 'react'

import shortid from "shortid"
import Nav from "react-bootstrap/Nav"
import Col from "react-bootstrap/Col"
import SidebarItem from "./SidebarItem"

const Sidebar = ({ data, clicked, setClicked, setMarkdownFile }) => {
  const sidebarItems = data.sidebar.map((el) => (
    <SidebarItem
      language={data.language}
      key={shortid.generate()}
      menu={el.menu}
      subMenu={el.subMenu}
      clicked={clicked}
      setClicked={setClicked}
      setMarkdownFile={setMarkdownFile}
    />
  ))
  return (
    <Col md='4' xl='3' className='py-3' id="sidebar">
      <Nav defaultActiveKey='/' className='flex-column'>
        {sidebarItems}
      </Nav>
    </Col>
  )
}

export default Sidebar
