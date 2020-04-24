import shortid from "shortid"
import Nav from "react-bootstrap/Nav"
import Col from "react-bootstrap/Col"
import NavigationItem from "./NavigationItem"

const Sidebar = ({ data }) => {
  const navigationItems = data.sidebar.map((el) => (
    <NavigationItem
      language={data.language}
      key={shortid.generate()}
      menu={el.menu}
      subMenu={el.subMenu}
    />
  ))
  return (
    <Col md='4' xl='3' className='py-3'>
      <Nav defaultActiveKey='/' className='flex-column'>
        {navigationItems}
      </Nav>
    </Col>
  )
}

export default Sidebar
