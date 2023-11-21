import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {

  const wishlist = useSelector((state)=>state.wishlistReducer)

  const cart = useSelector((state)=>state.cartReducer)
 
  console.log(wishlist);

  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link to={'/'}>FlapKart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><Link to={'/cart'}>Cart <Badge bg="warning">{cart?.length}</Badge></Link></Nav.Link>
            <Nav.Link ><Link to={'/wishlist'}>Wishlist <Badge bg="warning">{wishlist?.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header