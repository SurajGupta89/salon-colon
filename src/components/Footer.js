import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../index.css'
import logo from './images1/logo.avif'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";
// import { useState } from 'react';
// import GP from './images1/gp.webp'
// import AP from './images1/ap.webp'

function Footer() {
  return (
    <div>
      <Container fluid className='footer'>
        <Container className='foot'>
          <Row>
            <Col sm={4}>
            <img src={logo}  alt='nfjfjf'/>
            </Col>
            <Col sm={4}>
          <CiFacebook className='icon'/> <IoLogoInstagram className='icon'/>  <BsTwitterX className='icon'/> <CiYoutube className='icon'/>
            </Col>
            <Col sm={4} style={{height:'50px'}}>
            {/* <img src={GP} id='fimg'/>
            <img src={AP} id='fimg'/> */}
            </Col>
          </Row>
        </Container>
        <br/><br/>
        <Row>
          <Col sm={3}>
          <p className='ft'>Know us</p>
          <ul className='ul'>
            <li>About us</li>
            <li>Contact us</li>
            <li>Salon Locator</li>
            <li>Blogs</li>
            <li>Careers</li>
            <li>Content Hub</li>
            <li>Become a partner</li>
          </ul>
          </Col>
          <Col sm={3}>
          <p className='ft'>Services</p>
          <ul className='ul'>
            <li>Hairs</li>
            <li>makeup</li>
            <li>hands</li>
            <li>feet</li>
            <li>offers</li>
            <li>bridal</li>
            <li>appointment</li>
          </ul></Col>
          <Col sm={3}>
          <p className='ft'>Shop</p>
          <ul className='ul'>
            <li>Hair care</li>
            <li>skin care</li>
            <li>makeup</li>
            <li>bridal</li>
            <li>trending</li>
            <li>kits</li>
            <li>shop</li>
          </ul>
          </Col>
          <Col sm={3}>
          <p className='ft'>Customer Services</p>
          <ul className='ul'>
            <li>Track Ordery</li>
            <li>Shipping Policy</li>
            <li>Replacement & Refunds</li>
            <li>Terms & Conditions</li>
            <li>Privacy Notice</li>
            <li>Cookie Notice</li>
            <li>Accessibilit</li>
          </ul></Col>
        </Row>
        <Row>
          <br/>
          <br/>
          <Col sm={12}>
          <p className='ft'>Caution Notice</p>
          <p className='ul ps-4'>Please Be Aware: Cyber crime, particularly fraudulent communications through phone, SMS, WhatsApp, emails, etc. with third parties impersonating as a genuine organization or brand to financially dupe consumers is on the rise.</p>
          <p className='ul ps-4'>Unilever does not request for payment for purchase of our products outside our platform for any promotional activity. We also do not request for payments to participate in any contest, luck draw, free gifts. Hence, we request all consumers to be cautious in the event of any such communications. You can reach out to our customer care listed on our platform to verify any suspicious activity.</p>
          <p className='ul ps-4'>© 2025, Lakme Salon 
Refund policy
Privacy policy
Terms of service
Shipping policy</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer