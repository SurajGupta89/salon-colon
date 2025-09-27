import './App.css';
import React, { useRef } from 'react';
import { Carousel, Container, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import S1 from './images/s1.png';
import S2 from './images/s2.png';
import S3 from './images/s3.png';

function App() {
  const scrollRef = useRef(null);
  const galleryRef = useRef(null);

  const scroll = (ref, offset) => {
    if (ref.current) ref.current.scrollLeft += offset;
  };

  const productData = [
    {
      img: S1,
      title: "Glow Cream",
      price: "₹499",
      desc: "This glow cream helps rejuvenate dull skin using the power of natural ingredients. Infused with vitamin C and saffron, it restores skin’s brightness, reduces dark spots, and promotes ."
    },
    {
      img: S2,
      title: "Hydra Serum",
      price: "₹599",
      desc: "Hydra Serum delivers intense hydration with a lightweight formula. Enriched with hyaluronic acid, it helps retain moisture, reduce dryness, and refresh tired-looking skin. ."
    },
    {
      img: S3,
      title: "Night Repair Cream",
      price: "₹799",
      desc: "Formulated to repair your skin overnight, this cream works on fine lines, dark circles, and dryness. Packed with antioxidants and peptides, it improves elasticity, boosts collagen, "
    },
    {
      img: S1,
      title: "Under Eye Gel",
      price: "₹299",
      desc: "This under eye gel soothes puffiness and reduces dark circles with cucumber and aloe extracts. It provides a cooling effect that refreshes your eyes after long work hours. "
    },
    {
      img: S1,
      title: "Under Eye Gel",
      price: "₹299",
      desc: "This under eye gel soothes puffiness and reduces dark circles with cucumber and aloe extracts. It provides a cooling effect that refreshes your eyes after long work hours. ."
    },
    {
      img: S1,
      title: "Under Eye Gel",
      price: "₹299",
      desc: "This under eye gel soothes puffiness and reduces dark circles with cucumber and aloe extracts. It provides a cooling effect that refreshes your eyes after long work hours."
    },
    {
      img: S1,
      title: "Under Eye Gel",
      price: "₹299",
      desc: "This under eye gel soothes puffiness and reduces dark circles with cucumber and aloe extracts. It provides a cooling effect that refreshes your eyes after long work hours.."
    }
  ];
  const galleryImages = [
    S1, S2, S3, S1, S2, S3, S1, S2, S3, S1, S2, S3
  ];


  return (
    <Container fluid className="rr">
      {/* 🚀 Carousel */}
      <Carousel interval={2000}>
        <Carousel.Item>
          <img className="d-block w-100 custom-height" src={S1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-height" src={S2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-height" src={S3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      {/* 🛒 Product Cards */}
      <div className="product-carousel-wrapper my-5 position-relative">
        <Button className="scroll-btn left" onClick={() => scroll(scrollRef, -300)}>&lt;</Button>
        <div className="product-carousel" ref={scrollRef}>
          {productData.map((product, index) => (
            <Card key={index} className="product-card">
              <Card.Img variant="top" src={product.img} style={{ height: "200px", objectFit: "cover" }} />
              <Card.Body className="product-card-body">
                <Card.Title className="text-center text-white" style={{ fontSize: "15px" }}>
                  {product.title}
                </Card.Title>
                <Card.Text className="product-desc">
                  {product.desc}
                </Card.Text>
                <Card.Text className="text-center text-white" style={{ fontSize: "18px", fontWeight: 'bold' }}>
                  {product.price}
                </Card.Text>
                <Button variant='info' className="w-100 ">Add to Cart</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <Button className="scroll-btn right" onClick={() => scroll(scrollRef, 300)}>&gt;</Button>
      </div>
      <div className="gallery-wrapper my-5 position-relative">
        <Button className="scroll-btn white left" onClick={() => scroll(galleryRef, -1000)}>&lt;</Button>

        <div className="gallery-container" ref={galleryRef}>
          {galleryImages.map((img, i) => (
            <div key={i} className="gallery-image-wrapper">
              <img src={img} alt={`Gallery ${i}`} className="gallery-img" />
            </div>
          ))}
        </div>

        <Button className="scroll-btn white right" onClick={() => scroll(galleryRef, 1000)}>&gt;</Button>
      </div>
    </Container>
  );
}

export default App;
