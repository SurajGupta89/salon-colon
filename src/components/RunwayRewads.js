import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './../index.css'
import RR from  './images1/RR.webp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Of1 from './images1/off1.avif'
import Of2 from './images1/off2.avif'
import of3 from './images1/off3.avif'
import Table from 'react-bootstrap/Table';

function RunwayRewads() {
  return (
    <div className='home'>
   <Container fluid>
   <Row>
    <Col sm={12}>
    <img src={RR} style={{width:'100%'}} alt='rambadan' className='img img-fluid'/>
    </Col>
    <Col sm={12} className='mt-5 pt-5'>
   <p className='pr fw-bold'>ABOUT RUNWAY REWARDS</p>
   <p className='para'>At Lakmē Salon, we believe that every woman deserves to feel like she owns the runway. That's why 
    we created Runway Rewards – our exclusive loyalty program designed to celebrate your unique beauty 
    journey while rewarding your trust in India's most loved beauty experts. From your very first visit
     as a Silver Starlet to reaching the coveted status of Stunning Showstopper, you'll earn spotlights 
     with every service while unlocking exclusive benefits that make each salon experience more rewarding 
     than the last. Lakmē Salon offers four distinctive tiers crafted to match your beauty lifestyle, 
     with special perks like birthday surprises and happy hour discounts through Runway Rewards, ensuring 
     your loyalty translates into tangible rewards.</p>
    </Col>
    <Col></Col>
   </Row>
   <Row className='p-4'>
   <Col sm={3} className='text-center b1'>
     <img src={Of1} alt='ram badan' />
     <p className='filter'>40 Years of Experience</p>
     <p className='filter'>For platinum customers on all days all services</p>
    </Col>
     <Col sm={3} className='text-center b1'>
     <img src={Of2} alt='janhavi' />
     <p className='filter'>40 Years of Experience</p>
     <p className='filter'>Runway Rewards – Lakme Salon</p>
    </Col>
     <Col sm={3} className='text-center b1'>
     <img src={Of2} alt='17263' />
     <p className='filter'>40 Years of Experience</p>
     <p className='filter'>On all lakme products</p>
    </Col>
     <Col sm={3} className='text-center'>
     <img src={of3}  alt='hfhfhfb'/>
     <p className='filter'>40 Years of Experience</p>
     <p className='filter'>Welcome bonus spotlights for new customers</p>
    </Col>
   </Row>
  <Row className='p-5'>
     <Table striped bordered hover className="table">
      <thead>
        <tr>
          <th className="box p-5">Runway Reward Tiers</th>
          <th className="box p-5">Silver Starlet</th>
          <th className="box p-5">Golden Goddess</th>
          <th className="box p-5">Platinum Diva</th>
          <th className="box p-5">Stunning Stopper</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="bg-dark p-4 text-white">Runway Reward Tiers</td>
          <td className="bg-dark p-4 text-white">Silver Starlet</td>
          <td className="bg-dark p-4 text-white">Golden Goddess</td>
          <td className="bg-dark p-4 text-white">Platinum Diva</td>
          <td className="bg-dark p-4 text-white">Stunning Stopper</td>
        </tr>
         <tr>
          <td className="box p-5">Runway Reward Tiers</td>
          <td className="box p-5">Silver Starlet</td>
          <td className="box p-5">Golden Goddess</td>
          <td className="box p-5">Platinum Diva</td>
          <td className="box p-5">Stunning Stopper</td>
        </tr>
        <tr>
          <td className="bg-dark p-4 text-white">Runway Reward Tiers</td>
          <td className="bg-dark p-4 text-white">Silver Starlet</td>
          <td className="bg-dark p-4 text-white">Golden Goddess</td>
          <td className="bg-dark p-4 text-white">Platinum Diva</td>
          <td className="bg-dark p-4 text-white">Stunning Stopper</td>
        </tr>
         <tr>
          <td className="box p-5">Runway Reward Tiers</td>
          <td className="box p-5">Silver Starlet</td>
          <td className="box p-5">Golden Goddess</td>
          <td className="box p-5">Platinum Diva</td>
          <td className="box p-5">Stunning Stopper</td>
        </tr>
        <tr>
          <td className="bg-dark p-4 text-white">Runway Reward Tiers</td>
          <td className="bg-dark p-4 text-white">Silver Starlet</td>
          <td className="bg-dark p-4 text-white">Golden Goddess</td>
          <td className="bg-dark p-4 text-white">Platinum Diva</td>
          <td className="bg-dark p-4 text-white">Stunning Stopper</td>
        </tr>
      </tbody>
    </Table>
  </Row>
   </Container>
    </div>
  )
}

export default RunwayRewads