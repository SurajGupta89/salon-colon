import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './joinus.css'
import S2 from '../images/s2.png';
import S3 from '../images/s3.png';
const french = () => {
  return (
    <Container fluid className='pqrs'>
       <Row>
        <Col>
        <img src={S3} alt='nfjfbjfr' className='hd'/>
        </Col>
       </Row>
   <Container className="my-5">
      <h3 className="text-center mb-4 fw-bold">OWN A LAKME SALON</h3>
      <Row>
        {/* IMAGE COLUMN */}
        <Col md={6} sm={12} className="mb-4 ">
          <img
            src={S2}
            alt="Salon"
            className="img-fluid rounded ii"
          />
        </Col>

        {/* FORM COLUMN */}
        <Col md={6} sm={12}>
          <Form className="p-3 form-card">
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Full Name*" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Mobile*" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="email" placeholder="Email*" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select>
                <option>Select State*</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select>
                <option>Select City*</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Location*" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="text-white">Owner Space 800 sq.ft?*</Form.Label>
              <div>
                <Form.Check inline label="Yes" type="radio" name="space" />
                <Form.Check inline label="No" type="radio" name="space" />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control as="textarea" rows={2} placeholder="About Me*" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Query*" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="What is 1 + 8?*" />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Check type="checkbox" label="I agree to terms & conditions" />
              <Form.Check type="checkbox" label="I would like to get a partner call" />
              <Form.Check type="checkbox" label="I agree to receive communication via WhatsApp, SMS, Email etc." />
            </Form.Group>

            <Button className="gold-btn w-100 mt-3">SUBMIT</Button>
          </Form>
        </Col>
      </Row>
      </Container>
    </Container>

  )
}

export default french