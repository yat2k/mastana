import React from 'react';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import aim1 from '../assets/aim1_frame.jpg';
import aim2 from '../assets/aim2_frame.png';
import aim3 from '../assets/aim3_frame.png';
import {Carousel} from "react-bootstrap";
const AboutCarousel = () => {
    return (
        <div>
            <Carousel className='about-carousel'>
                <Carousel.Item>
                    <img
                     src={aim1}
                     className='d-block w-100 about-image'
                     alt={'image'}
                    />
                  <Carousel.Caption>
                      {/* <h3>This is a beautiful image</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={aim2}
                    alt={'image'}
                    className='d-block w-100 about-image'

                    />
                    <Carousel.Caption>
                        {/* <h3>This is another most fancy a</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={aim3}
                        alt={'image'}
                        className='d-block w-100 about-image'
                    />
                    <Carousel.Caption>
                        {/* <h3>This is another Beautiful Image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default AboutCarousel;




