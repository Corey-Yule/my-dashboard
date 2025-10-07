// app/components/Navbar/Navbar.js
'use client';

import { Container, Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';

export default function NavBar() {
  return (
    <BootstrapNavbar expand="lg" bg="dark" variant="dark" style={{paddingBottom:"2.5%"}}>
      <Container>
        <BootstrapNavbar.Brand href="/">Dashboard</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Dashboard</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}
