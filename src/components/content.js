import React from 'react'
import { Carousel, Container } from 'react-bootstrap';
import { Row,Col } from 'react-bootstrap'
import './ind.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import S1 from '../images/s1.png';
import S2 from '../images/s2.png';
import S3 from '../images/s3.png';
import Video1 from '../images/v1.mp4';
import Video2 from '../images/v2.mp4';
import Video3 from '../images/v3.mp4';
const content = () => {
  return (
   <Container fluid className="p-5">
      <Carousel controls={false} indicators={false} interval={2000} fade>
        <Carousel.Item>
          <img className="d-block w-100" src={S1} alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={S2} alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-400" src={S3}  style={{ height:"600px"}}alt="Slide 3" />
        </Carousel.Item>
      </Carousel>
      <Container className="my-5">
        <h1><center>LAKME FASHION WEEKSHOWCASE</center></h1>
      <Row>
        <Col md={4}>
          <video
            className="video-box border-one"
            width="100%"
            controls
            src={Video1} style={{height:"500px"}}
          />
        </Col>
        <Col md={4}>
          <video
            className="video-box border-two"
            width="100%"
            controls
            src={Video2} style={{height:"500px"}}
          />
        </Col>
        <Col md={4}>
          <video
            className="video-box border-three"
            width="100%"
            controls
            src={Video3}  style={{height:"500px"}}
          />
        </Col>
      </Row>
      <Container >
        <h1><center>  OUR MORE BLOG</center></h1>
        <Row>
            <Col sm={4}><img src={S1} alt='s1kdd' style={{ height:"200px" ,width:"100%"}}/></Col>
             <Col sm={4}><img src={S2} alt='s1kdd' style={{ height:"200px",width:"100%"}}/></Col>
              <Col sm={4}><img src={S3} alt='s1kdd' style={{ height:"200px",width:"100%"}}/></Col>
        </Row>
      </Container>
    </Container>
    </Container>
  )
}

export default content