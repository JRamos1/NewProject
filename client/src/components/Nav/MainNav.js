import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import SignIn from "../SignIn/SignIn"

function MainNav() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Recent</Nav.Link>
            <NavDropdown title="Tags" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tag 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Tag 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tag 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Tag 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
           <SignIn/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default MainNav