import React, { useState } from "react"
import Nav from "react-bootstrap/Nav"
import NavItem from "react-bootstrap/NavItem"
import NavLink from "react-bootstrap/NavLink"
import { withRouter, useHistory } from "react-router-dom"
import slugify from "../utils/slugify"
import shortid from "shortid"

const SidebarItem = ({ menu, subMenu, language, clicked, setClicked, setMarkdownFile }) => {
  let history = useHistory()
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = (event) => {
    history.push(`/${language}/${slugify(event.target.innerHTML)}`)
    setMarkdownFile(event.target.innerHTML)
    setClicked(!clicked)
  }

  const subMenuLinks = subMenu.map((subMenuItem) => (
    <NavLink key={shortid.generate()}>
      <li onClick={handleClick}>{subMenuItem}</li>
    </NavLink>
  ))

  return (
    <>
      <NavItem className={"py-3 border-bottom"}>
        <div onClick={(event) => toggle(event)} className="menuItem">
          <div className='d-flex justify-content-between align-items-center'>
            {menu}
            <img
              className='nav-icon'
              width='8'
              height='8'
              alt="arrow-direction"
              src={isOpen ? "/down.png" : "/right.png"}
            />
          </div>
        </div>
        <Nav
          className={
            "flex-column pt-3 pb-1 " + (isOpen ? "active" : "inactive")
          }>
          <ul>{subMenuLinks}</ul>
        </Nav>
      </NavItem>
    </>
  )
}

export default withRouter(SidebarItem)
