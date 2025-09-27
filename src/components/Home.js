import React from 'react'
import './../index.css';
import { Carousel } from 'react-bootstrap';
import { Container, Row, Col , Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import S1 from './images1/s1.webp';
import S2 from './images1/s2.webp';
import S3 from './images1/s3.webp';
import S4 from './images1/s4.webp';
import S5 from './images1/s5.webp';
import S6 from './images1/s6.webp';
import C1 from './images1/c1.webp';
import C2 from './images1/c2.webp';
import c3 from './images1/c3.webp';
import C4 from './images1/c4.webp';
import D1 from './images/d1.webp';
import D2 from './images1/d2.webp';
import D3 from './images1/d3.webp';
import D4 from './images1/d4.webp';



function Home() {
  return (
    <div className='home'>
    <Container fluid className="p-0">
      <Carousel  interval={2000}>
        <Carousel.Item >
          <img
            className="d-block w-100 h-10 custom-height"
            src={S1}
            alt="First slide"
          />
         
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 custom-height"
            src={S2}
            alt="Second slide"
          />
         
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 custom-height"
            src={S3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-height"
            src={S4}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-height"
            src={S5}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-height"
            src={S6}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
    <br/>
    <Container fluid className='bg-white text-center'>
      <p className='pr'>PRODUCT SPOTLIGHT</p>
      <ButtonGroup aria-label="Basic example">
      <Button id='buton'>Trending</Button>
      <Button variant='secondary' id='btn'>Skin</Button>
      <Button variant='secondary' id='btn'>Hairs</Button>
      <Button variant='secondary' id='btn'>Makeup</Button>
    </ButtonGroup>
    <br/> <br/><br/>
      <Row>
        <Col sm={3} className='text-end'>
         <Card style={{ width: '80%' }} id='card'>
      <Card.Img variant="top" src={C1} style={{height:'250px', width:'100%'}} />
      <Card.Body id='bd'>
        <Card.Title>De Fabulous Reviver Hair Repair Shampoo 250ml </Card.Title>
        <Card.Text>
         $800
        </Card.Text>
        <Button id='buton'>Add To Cart</Button>
      </Card.Body>
    </Card>
    </Col>

     <Col sm={3} className='text-center'>
         <Card style={{ width: '80%' }} id='card'>
      <Card.Img variant="top" src={C2} style={{height:'250px', width:'100%'}} />
      <Card.Body id='bd'>
        <Card.Title>De Fabulous Reviver Hair Repair Shampoo 250ml </Card.Title>
        <Card.Text>
         $800
        </Card.Text>
        <Button id='buton'>Add To Cart</Button>
      </Card.Body>
    </Card></Col>

     <Col sm={3} className='text-center'>
         <Card style={{ width: '80%' }} id='card'>
      <Card.Img variant="top" src={c3} style={{height:'250px', width:'100%'}} />
      <Card.Body id='bd'>
        <Card.Title>De Fabulous Reviver Hair Repair Shampoo 250ml </Card.Title>
        <Card.Text>
         $800
        </Card.Text>
        <Button id='buton'>Add To Cart</Button>
      </Card.Body>
    </Card></Col>

     <Col sm={3} className='text-center'>
         <Card style={{ width: '80%' }} id='card'>
      <Card.Img variant="top" src={C4} style={{height:'250px', width:'100%'}} />
      <Card.Body id='bd'>
        <Card.Title>De Fabulous Reviver Hair Repair Shampoo 250ml </Card.Title>
        <Card.Text>
         $800
        </Card.Text>
        <Button id='buton'>Add To Cart</Button>
      </Card.Body>
    </Card></Col>
      </Row>
      <br/>
      <Row>
        <Col sm={12}>
        <Button variant='dark' id='ct'>View All Products</Button>
        </Col>
      </Row>
      <br/>
<Row>
<Col sm={3}>
         <Card style={{ width: '100%' }} id='card'>
      <Card.Img src={D1} style={{height:'200px', width:'100%'}} />
    </Card>
</Col>
<Col sm={3}>
 <Card style={{ width: '100%' }} id='card'>
      <Card.Img src={D2} style={{height:'200px', width:'100%'}} />
    </Card></Col>
<Col sm={3}>
 <Card style={{ width: '100%' }} id='card'>
      <Card.Img src={D3} style={{height:'200px', width:'100%'}} />
    </Card></Col>
<Col sm={3}>
 <Card style={{ width: '100%' }} id='card'>
      <Card.Img src={D4} style={{height:'200px', width:'100%'}} />
    </Card></Col>
</Row>
<br/>
      </Container>  

    </div>
  )
}

export default Home



