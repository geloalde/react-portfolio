import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

export default function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h4 className="poppins"> TEAM PORTFOLIO</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto indentme5 poppins">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://www.youtube.com/watch?v=kOnde5c7OG8">Link</Nav.Link>
            <NavDropdown title="Team Members Repositories" id="basic-nav-dropdown">
              <NavDropdown.Item className="soft2" href="https://github.com/geloalde
">Gelo Alde</NavDropdown.Item>
              <NavDropdown.Item className="soft2" href="https://github.com/amcaj
">
                Angela Cajudo
              </NavDropdown.Item>
              <NavDropdown.Item className="soft2" href="https://github.com/evet8
                      ">Ernest Torrejos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="soft2" href="#action/3.4">
                What now?
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}