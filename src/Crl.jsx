import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './App2.css' // Import the CSS file

const ImageCarousel = () => {
  const carouselItems = [
    {
      src: './pic5.jpg',
      headline: 'Biggest Hockey league',
      subtext: '1st time in Bihar, Players Auction, 10 franchise, Prize money',
    },
    {
      src: './pic7.jpg',
      headline: 'Biggest Hockey league',
      subtext: '1st time in Bihar, Players Auction, 10 franchise, Prize money',
    },
    {
      src: './pic3.jpg',
      headline: 'Biggest Hockey league',
      subtext: '1st time in Bihar, Players Auction, 10 franchise, Prize money',
    },
    {
      src: './pic2.jpg',
      headline: 'Biggest Hockey league',
      subtext: '1st time in Bihar, Players Auction, 10 franchise, Prize money',
    },
  ];

  return (
    <Carousel fade interval={3000} className="img_slider">
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.src}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption className='car_text'>
            <h3
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
                
              }}
            >
              {item.headline}
            </h3>
            <p
              style={{
                fontSize: '1rem',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
              }}
            >
              {item.subtext}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
