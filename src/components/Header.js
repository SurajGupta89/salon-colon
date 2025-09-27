// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './../index.css';
// import logo from './images1/logo.avif';
// import { Link } from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// import { IoSearch } from "react-icons/io5";
// import { LuShoppingCart } from "react-icons/lu";
// import { FaRegUser, FaBars } from "react-icons/fa";
// import { TbTruckDelivery } from "react-icons/tb";
// import { FaRegHeart } from "react-icons/fa6";

// function Header() {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div className='fixed-top header'>

//       {/* Top promo banner */}
//       <div className='box text-center p-2 bg-light border-bottom'>
//         <a href="#" className='text-dark fw-bold text-decoration-none'>
//           Upto ₹200 cashback and assured Paytm vouchers Upto INR 2K | Shop Now
//         </a>
//       </div>

//       {/* Logo + Sidebar + Icons Row */}
//       <Container fluid className='head py-2 bg-white border-bottom'>
//         <Row className='align-items-center justify-content-between'>
//           {/* Left: Hamburger + Logo */}
//           <Col xs="auto" className="d-flex align-items-center gap-2">
//             <Button variant='dark' onClick={handleShow}>
//               <FaBars />
//             </Button>
//             <img src={logo} alt="logo" style={{ height: '40px' }} />
//           </Col>

//           {/* Right: Icons + Book Button */}
//           <Col className='d-flex justify-content-end align-items-center gap-3 pe-4 icons'>
//             <IoSearch className='ic' />
//             <LuShoppingCart className='ic' />
//             <FaRegUser className='ic' />
//             <FaRegHeart className='ic' />
//             <TbTruckDelivery className='ic' />
//             <Button id='button' variant='outline-dark' size='sm'>Book Appointment</Button>
//           </Col>
//         </Row>
//       </Container>

//       {/* Horizontal Nav Bar - Responsive */}
//       <Navbar bg="white" expand="lg" className='border-bottom'>
//         <Container fluid>
//           <Navbar.Toggle aria-controls="main-navbar" />
//           <Navbar.Collapse id="main-navbar">
//             <Nav className="a w-100 justify-content-around">
//               <Nav.Link as={Link} to="/">Services</Nav.Link>
//               <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
//               <Nav.Link as={Link} to="/bridal">Bridal</Nav.Link>
//               <Nav.Link as={Link} to="/RunwayRewads">Runway Rewards</Nav.Link>
//               <Nav.Link as={Link} to="/offer">Offer</Nav.Link>
//               <Nav.Link as={Link} to="/french">Franchise</Nav.Link>
//               <Nav.Link as={Link} to="/locator">Salon Locator</Nav.Link>
//               <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
//               <Nav.Link as={Link} to="/content">Content Hub</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       {/* Sidebar Offcanvas for Menu */}
//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Menu</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             <Nav.Link as={Link} to="/" onClick={handleClose}>Services</Nav.Link>
//             <Nav.Link as={Link} to="/shop" onClick={handleClose}>Shop</Nav.Link>
//             <Nav.Link as={Link} to="/bridal" onClick={handleClose}>Bridal</Nav.Link>
//             <Nav.Link as={Link} to="/RunwayRewads" onClick={handleClose}>Runway Rewards</Nav.Link>
//             <Nav.Link as={Link} to="/offer" onClick={handleClose}>Offer</Nav.Link>
//             <Nav.Link as={Link} to="/french" onClick={handleClose}>Franchise</Nav.Link>
//             <Nav.Link as={Link} to="/locator" onClick={handleClose}>Salon Locator</Nav.Link>
//             <Nav.Link as={Link} to="/contact" onClick={handleClose}>Contact</Nav.Link>
//             <Nav.Link as={Link} to="/content" onClick={handleClose}>Content Hub</Nav.Link>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </div>
//   );
// }

// export default Header;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../index.css'; // Ensure your styles are correct here
import logo from './images1/logo.avif';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser, FaBars } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='fixed-top header'>

      {/* Top promo banner */}
      <div className='box text-center p-2 bg-light border-bottom'>
        <a href="  " className='text-dark fw-bold text-decoration-none'>
          Upto ₹200 cashback and assured Paytm vouchers Upto INR 2K | Shop Now
        </a>
      </div>

      {/* Logo + Sidebar + Icons Row */}
      <Container fluid className='head py-2 bg-white border-bottom'>
        <Row className='align-items-center justify-content-between bg-black'>

          {/* Left: Hamburger + Logo */}
          <Col xs="auto" className="d-flex align-items-center gap-2">
            <Button variant='dark' onClick={handleShow}>
              <FaBars />
            </Button>
            <img src={logo} alt="logo" style={{ height: '40px' }} />
          </Col>

          {/* Right: Icons + Book Appointment */}
          <Col className='d-flex justify-content-end align-items-center gap-3 pe-4 '>
            <IoSearch className='ic' />
            <LuShoppingCart className='ic' />
            <FaRegUser className='ic' />
            <FaRegHeart className='ic' />
            <TbTruckDelivery className='ic' />
            <Button id='button' variant='outline-dark' size='sm'>Book Appointment</Button>
          </Col>
        </Row>
      </Container>

      {/* Horizontal Nav Bar */}
      <Navbar bg="white" expand="lg" className='border-bottom'>
        <Container fluid>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="a w-100 justify-content-around">
              <Nav.Link as={Link} to="/">Services</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/bridal">Bridal</Nav.Link>
              <Nav.Link as={Link} to="/runway-rewards">Runway Rewards</Nav.Link>
              <Nav.Link as={Link} to="/offer">Offer</Nav.Link>
              <Nav.Link as={Link} to="/french">Franchise</Nav.Link>
              <Nav.Link as={Link} to="/locator">Salon Locator</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/content">Content Hub</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar Offcanvas for Mobile Menu */}
      <Offcanvas show={show} onHide={handleClose } >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-black'>
          <Nav className="flex-column bg-black">
            <Nav.Link as={Link} to="/" onClick={handleClose}>Services</Nav.Link>
            <Nav.Link as={Link} to="/shop" onClick={handleClose}>Shop</Nav.Link>
            <Nav.Link as={Link} to="/bridal" onClick={handleClose}>Bridal</Nav.Link>
            <Nav.Link as={Link} to="/runway-rewards" onClick={handleClose}>Runway Rewards</Nav.Link>
            <Nav.Link as={Link} to="/offer" onClick={handleClose}>Offer</Nav.Link>
            <Nav.Link as={Link} to="/french" onClick={handleClose}>Franchise</Nav.Link>
            <Nav.Link as={Link} to="/locator" onClick={handleClose}>Salon Locator</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleClose}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/content" onClick={handleClose}>Content Hub</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Header;
