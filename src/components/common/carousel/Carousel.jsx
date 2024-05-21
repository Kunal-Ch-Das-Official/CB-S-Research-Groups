import Carousel from 'react-bootstrap/Carousel';
import CarouselImg1 from '../../../assets/images/research-page/Carousel-1.webp';
import CarouselImg2 from '../../../assets/images/research-page/Carousel-2.webp';
import CarouselImg3 from '../../../assets/images/research-page/Carousel-3.webp';
function CarouselSection() {
  return (
    <Carousel data-bs-theme="light" className='bg-light'>
      <Carousel.Item>
        <img rel='preload' height={500}
          className="d-block w-100 img-fluid"
          src={CarouselImg1}
          alt="Carousel-Images"
        />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img rel='preload' height={500}
          className="d-block w-100 img-fluid"
          src={CarouselImg2}
          alt="Carousel-Images"
        />
        <Carousel.Caption>
          
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img rel='preload' height={500}
          className="d-block w-100 vh-60 img-fluid"
          src={CarouselImg3}
          alt="Carousel-Images"
        />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSection;