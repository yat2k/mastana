import React from 'react';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import aim1 from '../assets/aim1.png';
import aim2 from '../assets/aim2.png';
import aim3 from '../assets/aim3.png';
import {Carousel} from "react-bootstrap";
const Slide = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                     src={aim1}
                     className={'d-block w-100'}
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
                    className={'d-block w-100'}

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
                        className={'d-block w-100'}
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

export default Slide;




// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from '../assets/template_images/london.png';

// function Slide() {
//   return (
//     <Carousel>
//       <Carousel.Item>
        
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
        
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
        
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Slide;