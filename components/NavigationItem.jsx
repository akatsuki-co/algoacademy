import { useState } from "react"
import Nav from "react-bootstrap/Nav"
import NavItem from "react-bootstrap/NavItem"
import NavLink from "react-bootstrap/NavLink"
import { withRouter, useHistory } from "react-router-dom"
import slugify from "../utils/slugify"
import shortid from "shortid"

const NavigationItem = ({ menu, subMenu, language }) => {
  let history = useHistory()
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = (event) => {
    history.push(`/${language}/${slugify(event.target.innerHTML)}`)
  }

  const navLinks = subMenu.map((subMenuItem) => (
    <NavLink key={shortid.generate()}>
      <li onClick={handleClick}>{subMenuItem}</li>
    </NavLink>
  ))

  return (
    <>
      <NavItem className={"py-3 border-bottom"}>
        <a onClick={(event) => toggle(event)}>
          <div className='d-flex justify-content-between align-items-center'>
            {menu}
            <img
              className='nav-icon'
              width='8'
              height='8'
              src={isOpen ? "/down.png" : "/right.png"}
            />
          </div>
        </a>
        <Nav
          className={
            "flex-column pt-3 pb-1 " + (isOpen ? "active" : "inactive")
          }>
          <ul>{navLinks}</ul>
        </Nav>
      </NavItem>
      <style jsx global>
        {`
          a:hover {
            cursor: pointer;
          }

          .inactive {
            display: none;
          }

          .active {
            display: block;
          }

          .nav-link {
            color: black;
          }

          .nav-icon {
            opacity: 0.5;
          }

          .nav-item:last-child {
            border-bottom: none !important;
          }
        `}
      </style>
    </>
  )
}

export default withRouter(NavigationItem)
