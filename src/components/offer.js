import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row,Col } from 'react-bootstrap'
import './ind.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import S1 from '../images/s1.png';
import S2 from '../images/s2.png';
import S8 from '../images/s8.webp';
import S7 from '../images/s7.webp';
const offer = () => {
  return (
   <Container fluid className='pp'>
    <Row>
        <Col  className='left'><img src={S1} alt=' ppppppppppppppp'/></Col>
        
    </Row>
    <Row className='p-5'>
        <Col  className='left'><img src={S1} alt=' ppppppppppppppp'/></Col>
        <Col className='right'><img src={S2} alt=' ppppppppppppppp'/></Col>
    </Row>
    <Row className='p-5'>
        <Col  className='left'><img src={S8} alt=' ppppppppppppppp'/></Col>
        <Col className='right'><img src={S7} alt=' ppppppppppppppp'/></Col>
    </Row>
   </Container>
  )
}

export default offer