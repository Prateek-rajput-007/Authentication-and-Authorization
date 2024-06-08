import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><strong>Not-LoggedIn</strong></Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
          <Nav.Link as={Link} to="/signup" className="nav-link">Signup</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;