import React from 'react'
import { Container, Row, Col , Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import S1 from './images1/s1.webp';
// import S2 from './images1/s2.webp';
// import S3 from './images1/s3.webp';
// import S4 from './images1/s4.webp';
// import S5 from './images1/s5.webp';
// import S6 from './images1/s6.webp';
import C1 from './images1/c1.webp';
import C2 from './images1/c2.webp';
import c3 from './images1/c3.webp';
// import C4 from './images1/c4.webp';
// import D1 from './images1/d1.webp';
// import D2 from './images1/d2.webp';
// import D3 from './images1/d3.webp';
// import D4 from './images1/d4.webp';
import Dropdown from 'react-bootstrap/Dropdown';
import './../index.css';

function Shop() {
  return (
    <div className='home'>
        <br/>
    <Container fluid>
        <p className='pr'>All Products</p>
        <Row>
            <Col sm={3} className='ps-5'>
            <p className='filter'>Filter</p>
            <hr/>
             <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Price
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr/>
     <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Brands
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
<hr/>
 <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        Category
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr/>
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
     
      </Dropdown.Toggle>
      Prroduct Type
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            </Col>
            <Col sm={9}>
            <Row>
                <Col sm={4}>
                 <Card style={{ width: '100%' }} id='card'>
                      <Card.Img variant="top" src={C1} style={{height:'250px', width:'100%'}} />
                      <Card.Body id='bd'>
                        <Card.Title>De Fabulous Reviver Hair Repair Shampoo 250ml </Card.Title>
                        <Card.Text>
                         $800
                        </Card.Text>
                        <Button id='buton'>Add To Cart</Button>
                      </Card.Body>
                    </Card></Col>
                <Col sm={4}>
                 <Card style={{ width: '100%' }} id='card'>
      <Card.Img variant="top" src={c3} style={{height:'250px', width:'100%'}} />
      <Card.Body id='bd'>
        <Card.Title>De Fabulous Reviver Hair Repair Shampoo 250ml </Card.Title>
        <Card.Text>
         $800
        </Card.Text>
        <Button id='buton'>Add To Cart</Button>
      </Card.Body>
    </Card></Col>
    <Col sm={4}>
                 <Card style={{ width: '100%' }} id='card'>
      <Card.Img variant="top" src={C2} style={{height:'250px', width:'100%'}} />
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
                <Col sm={4}>
                 <Card style={{ width: '100%' }} id='card'>
                      <Card.Img variant="top" src={C1} style={{height:'250px', width:'100%'}} />
                      <Card.Body id='bd'>
                        <Card.Title>De Fabulous Reviver Hair Repair Shampoo 250ml </Card.Title>
                        <Card.Text>
                         $800
                        </Card.Text>
                        <Button id='buton'>Add To Cart</Button>
                      </Card.Body>
                    </Card></Col>
                <Col sm={4}>
                 <Card style={{ width: '100%' }} id='card'>
      <Card.Img variant="top" src={c3} style={{height:'250px', width:'100%'}} />
      <Card.Body id='bd'>
        <Card.Title>De Fabulous Reviver Hair Repair Shampoo 250ml </Card.Title>
        <Card.Text>
         $800
        </Card.Text>
        <Button id='buton'>Add To Cart</Button>
      </Card.Body>
    </Card></Col>
    <Col sm={4}>
                 <Card style={{ width: '100%' }} id='card'>
      <Card.Img variant="top" src={C2} style={{height:'250px', width:'100%'}} />
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
                <Col sm={4}>
                 <Card style={{ width: '100%' }} id='card'>
                      <Card.Img variant="top" src={C1} style={{height:'250px', width:'100%'}} />
                      <Card.Body id='bd'>
                        <Card.Title>De Fabulous Reviver Hair Repair Shampoo 250ml </Card.Title>
                        <Card.Text>
                         $800
                        </Card.Text>
                        <Button id='buton'>Add To Cart</Button>
                      </Card.Body>
                    </Card></Col>
                <Col sm={4}>
                 <Card style={{ width: '100%' }} id='card'>
      <Card.Img variant="top" src={c3} style={{height:'250px', width:'100%'}} />
      <Card.Body id='bd'>
        <Card.Title>De Fabulous Reviver Hair Repair Shampoo 250ml </Card.Title>
        <Card.Text>
         $800
        </Card.Text>
        <Button id='buton'>Add To Cart</Button>
      </Card.Body>
    </Card></Col>
    <Col sm={4}>
                 <Card style={{ width: '100%' }} id='card'>
      <Card.Img variant="top" src={C2} style={{height:'250px', width:'100%'}} />
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
                <Col sm={4}>
                 <Card style={{ width: '100%' }} id='card'>
                      <Card.Img variant="top" src={C1} style={{height:'250px', width:'100%'}} />
                      <Card.Body id='bd'>
                        <Card.Title>De Fabulous Reviver Hair Repair Shampoo 250ml </Card.Title>
                        <Card.Text>
                         $800
                        </Card.Text>
                        <Button id='buton'>Add To Cart</Button>
                      </Card.Body>
                    </Card></Col>
                <Col sm={4}>
                 <Card style={{ width: '100%' }} id='card'>
      <Card.Img variant="top" src={c3} style={{height:'250px', width:'100%'}} />
      <Card.Body id='bd'>
        <Card.Title>De Fabulous Reviver Hair Repair Shampoo 250ml </Card.Title>
        <Card.Text>
         $800
        </Card.Text>
        <Button id='buton'>Add To Cart</Button>
      </Card.Body>
    </Card></Col>
    <Col sm={4}>
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
            </Row>
            </Col>
        </Row>
        <br/>
    </Container>
    </div>
  )
}

export default Shop