import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import img1 from '../../../assets/images/Alumni_grid_img/Grid_Img_1.webp';
import img2 from '../../../assets/images/Alumni_grid_img/Grid_Img_2.webp';
import img3 from '../../../assets/images/Alumni_grid_img/Grid_Img_3.webp';
import img4 from '../../../assets/images/Alumni_grid_img/Grid_Img_4.webp';
import img5 from '../../../assets/images/Alumni_grid_img/Grid_Img_5.webp';
import img6 from '../../../assets/images/Alumni_grid_img/Grid_Img_6.webp';
import img7 from '../../../assets/images/Alumni_grid_img/Grid_Img_7.webp';

const Gallary = () => {
    return (
        <Container>
   <Row className='mt-5'> 
        <Col xs={12} md={8}>
          <LazyLoadImage src={img1} alt='Students picture' className='img-fluid'/>
        </Col>
        <Col xs={6} md={4}>
        <LazyLoadImage src={img2} alt='Students picture' className='img-fluid'/>
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row className='mb-4 mt-5'>
        <Col xs={6} md={4}>
        <LazyLoadImage src={img3} alt='Students picture' className='img-fluid'/>
        </Col>
        <Col xs={6} md={4}>
        <LazyLoadImage src={img4} alt='Students picture' className='img-fluid'/>
        </Col>
        <Col xs={6} md={4}>
        <LazyLoadImage src={img5} alt='Students picture' className='img-fluid'/>
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row className='mb-5'>
        <Col xs={6}>
        <LazyLoadImage src={img6} alt='Students picture' className='img-fluid'/>
        </Col>
        <Col xs={6}>
        <LazyLoadImage src={img7} alt='Students picture' className='img-fluid'/>
        </Col>
      </Row>
        </Container>
    )
}

export default Gallary;
