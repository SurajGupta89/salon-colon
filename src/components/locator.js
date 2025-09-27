import React from 'react'
import { Container, Row, Col, Card, Button, Form, Carousel } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import './h.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import S1 from '../images/s1.png';
import S2 from '../images/s2.png';


const locator = () => {
    const salonData = [
  {
    name: "LAKME SALON FOR HIM & HER IN CR PARK",
    address: "No B/315, Upper Ground Floor, Block B, Chittaranjan Park, New Delhi - 110019",
    phone: "+917304556377",
    timing: "Open until 08:00 PM",
    mapLink: "#",
    websiteLink: "#"
  },
  {
    name: "LAKME SALON",
    address: "K 92 B, 1st Floor, Central Market, Veen Savarkar Marg, Lajpat Nagar, New Delhi - 110024",
    phone: "+918960064170",
    timing: "Open until 08:00 PM",
    mapLink: "#",
    websiteLink: "#"
  },
  {
    name: "LAKME SALON",
    address: "No A/21, Block A, Saraswati Vihar, Pitampura, New Delhi - 110034",
    phone: "+919268605681",
    timing: "Open until 09:00 PM",
    mapLink: "#",
    websiteLink: "#"
  },
  {
    name: "LAKME SALON",
    address: "Property No D/416, 1st Floor, Ramphal Chowk Road, Sector 7, Dwarka, New Delhi - 110045",
    phone: "+919311286008",
    timing: "Open until 09:00 PM",
    mapLink: "#",
    websiteLink: "#"
  },
  {
    name: "LAKME SALON FOR HIM & HER IN GREATER KAILASH",
    address: "No M/61, Ground Floor, M Block Market, Greater Kailash 2, New Delhi - 110048",
    phone: "+911140508714",
    timing: "Open until 08:00 PM",
    mapLink: "#",
    websiteLink: "#"
  },
  {
    name: "LAKME SALON",
    address: "No E/32, 2nd Floor, Part 2, South Extension, New Delhi - 110049",
    phone: "+919871627282",
    timing: "Open until 09:00 PM",
    mapLink: "#",
    websiteLink: "#"
  }
];
  return (
      <Container className="my-5 ccc">
         <Row className="mb-5">
        {/* FORM COLUMN */}
        <Col md={5} sm={12} className="mb-3">
          <Card className="p-4 locator-form">
            <h5 className="text-white fw-bold mb-3">Lakme Salon</h5>
            <Form>
              <Form.Group controlId="formSearch">
                <Form.Control type="text" placeholder="Search nearby salons by locality" className="mb-3" />
              </Form.Group>
              <div className="text-white text-center mb-2">OR</div>
              <Form.Group controlId="formState">
                <Form.Select className="mb-3">
                  <option>State*</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="formCity">
                <Form.Select className="mb-3">
                  <option>City</option>
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="formLocality">
                <Form.Select className="mb-3">
                  <option>Locality</option>
                </Form.Select>
              </Form.Group>
              <div className="d-grid">
                <Button className="gold-btn">SEARCH</Button>
              </div>
            </Form>
          </Card>
        </Col>

        {/* SLIDER COLUMN */}
        <Col md={7} sm={12}>
          <Carousel interval={1000} indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100 bb "
                src={S1} 
                alt="Slide 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h- bb"
                src={S2}
                alt="Slide 2"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <h2 className="text-center mb-4 heading-text">LAKME SALON</h2>
      <Row>
        {salonData.map((salon, index) => (
          <Col key={index} md={4} sm={12} className="mb-4">
            <Card className="salon-card text-white h-200">
              <Card.Body>
                <Card.Title className="fw-bold">{salon.name}</Card.Title>
                <hr className="divider" />
                <Card.Text>
                  <p><FaMapMarkerAlt className="icon" /> {salon.address}</p>
                  <p><FaPhoneAlt className="icon" /> {salon.phone}</p>
                  <p><FaClock className="icon" /> {salon.timing}</p>
                </Card.Text>
                <div className="d-flex gap-2 mt-3">
                  <Button href={salon.mapLink} target="_blank" className="gold-btn">MAP</Button>
                  <Button href={salon.websiteLink} target="_blank" className="gold-btn">WEBSITE</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default locator