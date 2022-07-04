import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

export default function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h4 className="poppins">PORTFOLIO</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto indentme5 poppins">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://www.youtube.com/watch?v=kOnde5c7OG8">Link</Nav.Link>
            <NavDropdown title="Past Passions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Passion 2019</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Passion 2020
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Passion 2021</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                What now?
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}