import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand as={Link} to="/home">Gadget Zone</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Home">Home</Nav.Link>
              <Nav.Link href="#inventory">Inventory</Nav.Link>
              <Nav.Link href="#blogs">Blogs</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>

            

            </Nav>
            <Nav>
            {
                user && <>
                  <Nav.Link as={Link} to="/manageItems">Manage Item</Nav.Link>
                  <Nav.Link  as={Link} to="/AddItem">Add Item</Nav.Link>
                  <Nav.Link  as={Link} to="/MyItems">My Items</Nav.Link>
                </>
              }

              {
                user ?
                  
                  <Nav.Link  onClick={handleSignOut}>Sign Out</Nav.Link>
                  :
                 <>
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                   <Nav.Link as={Link} to="/login">
                   Login
                 </Nav.Link>
                 </>
                 }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;