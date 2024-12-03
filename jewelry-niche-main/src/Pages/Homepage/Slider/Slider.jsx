import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./Slider.css";

function Slider() {
  // return home page slide here
  return (
    <div className='Slider'>
      <Carousel className='text-left carousel'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/bvg5Wxq/img7.jpg'
            alt='First slide'
          />
          <Carousel.Caption className='left'>
            <p className='slider-text subtitle'>AMAZING FROM JEWELRY</p>
            <h3 className='slider-title'>Dimond Rings Decoration</h3>
            <p className='slider-text'>Discount 20% Off For Ruby gemstone</p>
            <Button className='px-4 py-3 rounded-pill mt-4' variant='danger'>
              DISCOVER NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/6v5tG34/download1.jpg'
            alt='Second slide'
          />

          <Carousel.Caption className='right'>
            <p className='slider-text subtitle'>AMAZING FROM JEWELRY</p>
            <h3 className='slider-title'>Gold Rings Decoration</h3>
            <p className='slider-text'>Discount 20% Off For Ruby gemstone</p>
            <Button className='px-4 py-3 rounded-pill mt-4' variant='danger'>
              DISCOVER NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
         <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://i.ibb.co/6HTCmzj/img2.jpg'
            alt='Third slide'
          />

          <Carousel.Caption>
            <p className='slider-text'>AMAZING FROM JEWELRY</p>
            <h3 className='slider-title'>Rose Diamond Decoration</h3>
            <p className='slider-text'>Discount 10% Off For Ruby gemstone</p>
          </Carousel.Caption>
        </Carousel.Item> 
      </Carousel>
    </div>
  );
}

export default Slider;
