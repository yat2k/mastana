import './components.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from '../assets/gallery_images/img1.jpg';
import img2 from '../assets/gallery_images/img2.jpg';
import img3 from '../assets/gallery_images/img3.jpg';
import img4 from '../assets/gallery_images/img4.jpg';
import img5 from '../assets/gallery_images/img5.jpg';
import img6 from '../assets/gallery_images/img6.jpg';
import img7 from '../assets/gallery_images/img7.jpg';
import {Carousel} from "react-bootstrap";

export default function Gallery(){
    return(
        <>
            <section className="gallery-class" id="gallery">
            <div>
            <h1>Gallery</h1>
            
            <Carousel className='gallery-carousel'>
                <Carousel.Item>
                    <img
                     src={img1}
                     className='gallery-image'
                     alt={'image'}
                    />  
                </Carousel.Item>        
                <Carousel.Item>
                    <img
                    src={img2}
                    alt={'image'}
                    className='gallery-image'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={img3}  
                        alt={'image'}
                        className='gallery-image'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={img4}
                    alt={'image'}
                    className='gallery-image'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={img5}
                    alt={'image'}
                    className='gallery-image'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={img6}
                    alt={'image'}
                    className='gallery-image'
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={img7}
                    alt={'image'}
                    className='gallery-image'
                    />
                </Carousel.Item>
            </Carousel>
            </div>
            </section>
        </>
    );
}