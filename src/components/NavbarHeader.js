import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useShoppingCart } from "../context/ShoppingCartContext";

const NavbarHeader = () => {
  const {openCart, cartQuantity} = useShoppingCart()
  return (
   <>
    <Navbar sticky='top' className="bg-white shadow-sm mb-3">
      <Container>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
            <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
          </Nav>
          <Button 
          variant='outline-primary' 
          className='rounded-circle'
          style={{width: '3rem', height: '3rem', position: 'relative'}}
          onClick={openCart}
          >
            <FontAwesomeIcon icon={faCartShopping} />
            <div 
              style={{position: 'absolute', right: 0, top: 0, color: 'white', width: '1.5rem', height: '1.5rem', transform: 'translate(25%, -25%)'}} 
              className='rounded-circle bg-danger d-flex justify-content-center align-items-center'>
              {cartQuantity}
            </div>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}

export default NavbarHeader
