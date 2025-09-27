import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../index.css'
// import logo from './images1/logo.avif'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Model from './images1/contact.webp'

function Contact() {
  return (
    <div className='home'>
      <Container fluid>
        <Row className='p-4'>
            <Col sm={5}>
           <img src={Model} alt='mcmdmdk' id='model' className='img img-fluid' />
            </Col>
            <Col sm={7}>
            <div id='cbox'>
            <p className='cp'>WHETHER YOU WANT TO BOOK AN APPOINTMENT, ASK A QUESTION, REGISTER A COMPLAINT, OR SHARE FEEDBACK</p>
            <p className='cp2 pt-4'>REACH OUT TO US</p>
             <p className='cp pt-4'>WE'D LOVE TO HEAR FROM YOU</p>
             <p className='fw-bold text-center h5 pt-3'>TOLL FREE: 1800 123 1952</p>
             <p className='fw-bold text-center h5'>CARE.LLPL@UNILEVER.COM (for Salon services)</p>
             <p className='fw-bold text-center h5'>LAKMESALON.QUERIES@UNILEVER.COM (for Products)</p>
            </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact