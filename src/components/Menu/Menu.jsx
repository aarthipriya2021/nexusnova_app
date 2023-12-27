import React from 'react'
import {data, images} from "../../constants";
import { Container, Nav, Navbar} from "react-bootstrap";
import "./Menu.css";

const Menu = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant='light'>
        <Container>
          <Navbar.Brand href="#home" >
            <img src={images.logo} alt='logo' className='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
                {data.Menu.map((item, index) => (
                  <Nav.Link href={item.link}>{item.text}</Nav.Link>
                ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu
