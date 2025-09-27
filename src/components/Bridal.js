import React from 'react'
import './../index.css';
import { Container, Row, Col , Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Bride from './images1/bride.webp'
import Ch1 from './images1/choose1.avif'
import Ch2 from './images1/choose2.avif'
import Ch3 from './images1/choose3.avif'
import Ac1 from './images1/ac1.webp'
import B1 from './images1/bride1.webp'
import B2 from './images1/bride2.webp'
import B3 from './images1/bride3.webp'
import B4 from './images1/bride4.webp'
import Make from './images1/make.webp'
import Mahal from './images1/mahal.webp'


function Bridal() {
  return (
    <div className='home'>
        <Container fluid>
          <img src={Bride} id='bride' alt='hshsh'/>  
        </Container>
        <Container className='pt-5'>
            <p className='pr'>WHY CHOOSE US</p>
            <Row>
                <Col sm={4} className='text-center'>
                <img src={Ch1}  alt='kfkfk'/>
                <p className='filter'>40 Years of Experience</p>
                </Col>
                <Col sm={4} className='text-center'>
                <img src={Ch2} alt='kfkfk' />
                <p className='filter'>1 Lakh Brides</p>
                </Col>
                <Col sm={4} className='text-center'>
                <img src={Ch3} alt='kfkfk' />
                <p className='filter'>Your Makeup Trial is on us</p>
                </Col>
                <Row className='pt-5'>
                    <Col sm={12} className='text-center'>
                     <Button id='button'>Book Your Free Trial</Button>
                    </Col>
                </Row>
            </Row>
        </Container>
        <br/>
        <Container className='pt-5'>
            <p className='pr h2'>Your 90-Day Journey Starts Here!</p>
          <p className='pr h5 pt-3'>Dont worry, we’ve got you covered for last-minute arrangements too!</p>
<Row>
    <Col sm={12}>
  <div className='test pt-5 pb-3'>
    <img src={Ac1} alt='kfkfk' />
    <span className='ps-3'>
        <p className='h2'>Consultation</p>
    <p>Your dream wedding begins with our comprehensive bridal consultation at Lakmē Salon, where our 
        expert makeup artists analyze your skin tone, face shape, and personal style to create the
         perfect bridal makeup experience tailored just for you. During this detailed session, we explore
          different bridal looks that complement your wedding theme and venue, discuss your preferred 
          bridal eye makeup techniques, and provide complete transparency about our bridal makeup package 
          prices and the bridal makeup cost breakdown for all your functions, ensuring you have a clear 
          roadmap for your 90-day transformation journey with convenient payment options and personalized
           service recommendations.</p>
    </span>
  </div>
    </Col>
</Row>
        </Container>

<Container className='pt-5'>
    <p className='pr h2'>THE ETHERNAL BLOOM COLLECTION</p>
    <Row className='pt-5'>
   <Col sm={3}>
    <Card style={{ width: '100%' }} id='card2'>
      <Card.Img variant="top" src={B1} style={{height:'280px', width:'100%',padding:'10px'}} />
  <Card.Body id='bd'>
   <Card.Title>Mari gold radience</Card.Title>
        <Card.Text>At Lakme Salon, we understand that your wedding day is a once-in- a-lifetime experience. That's why we've made it our mission to provide exceptional bridal makeup services, wherever your wedding takes you. With over 450+ locations across 190 cities.        
     </Card.Text> 
  </Card.Body>
 </Card></Col>
   <Col sm={3}>
   <Card style={{ width: '100%' }} id='card2'>
      <Card.Img variant="top" src={B2} style={{height:'280px', width:'100%',padding:'10px'}} />
  <Card.Body id='bd'>
   <Card.Title>Mari gold radience</Card.Title>
        <Card.Text>At Lakme Salon, we understand that your wedding day is a once-in- a-lifetime experience. That's why we've made it our mission to provide exceptional bridal makeup services, wherever your wedding takes you. With over 450+ locations across 190 cities.        
     </Card.Text> 
  </Card.Body>
 </Card></Col>
   <Col sm={3}>
   <Card style={{ width: '100%' }} id='card2'>
      <Card.Img variant="top" src={B3} style={{height:'280px', width:'100%',padding:'10px'}} />
  <Card.Body id='bd'>
   <Card.Title>Mari gold radience</Card.Title>
        <Card.Text>At Lakme Salon, we understand that your wedding day is a once-in- a-lifetime experience. That's why we've made it our mission to provide exceptional bridal makeup services, wherever your wedding takes you. With over 450+ locations across 190 cities.        
     </Card.Text> 
  </Card.Body>
 </Card></Col>
   <Col sm={3}>
   <Card style={{ width: '100%' }} id='card2'>
      <Card.Img variant="top" src={B4} style={{height:'280px', width:'100%',padding:'10px'}} />
  <Card.Body id='bd'>
   <Card.Title>Mari gold radience</Card.Title>
        <Card.Text>At Lakme Salon, we understand that your wedding day is a once-in- a-lifetime experience. That's why we've made it our mission to provide exceptional bridal makeup services, wherever your wedding takes you. With over 450+ locations across 190 cities.        
     </Card.Text> 
  </Card.Body>
 </Card>
 </Col>
    </Row>
</Container>
<Container>
    <Row>
        <Col sm={12}>
        <div className='test1 pt-5 pb-3'>
    <img src={Make} alt='kfkfk' id='make'/>
    <span className='ps-3'>
        <p className='h2'>Our Team</p>
    <p>When you choose Lakmē Salon for your bridal makeup appointment, rest assured you're in safe hands with our highly trained professionals, backed by Lakmē Fashion Week expertise, who are committed to making your dream bridal looks a reality. Our dedicated bridal hair and makeup team specializes in creating stunning bridal hair looks that perfectly complement your bridal makeup looks, with expertise in contemporary styles, traditional elegance, and the art of sari draping for classic Indian beauty. We also offer specialized groom's makeup services to ensure the perfect complement to the bride's look, creating a harmonious aesthetic for your special day. When you book your Lakmē Salon appointment, you receive personalized attention from experienced professionals who are passionate about delivering flawless results that exceed your expectations.</p>
    </span>
  </div>
        </Col>
    </Row>
</Container>
<Container className='pt-5'>
<Row>
    <Col sm={8}>
    <h2 className='fw-bold'>WITH OVER 450+ LOCATIONS ACROSS 190+ CITIES WE ARE YOUR IDEAL DESTINATION WEDDING PARTNER</h2>
    <p className='pt-3'>At Lakme Salon, we understand that your wedding day is a once-in- a-lifetime experience. That's why we've made it our mission to provide exceptional bridal makeup services, wherever your wedding takes you. With over 450+ locations across 190 cities, we're the perfect partner for destination weddings, offering a seamless and stress-free experience that lets you focus on what really matters – your special day.</p></Col>
    <Col sm={4}>
    <img src={Mahal} alt='kfkfk' id='make2'/></Col>
</Row>
</Container>
    </div>
  )
}

export default Bridal