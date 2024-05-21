import React from 'react';
import CardStyle from './Cards.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col } from 'react-bootstrap';

const Cards = ({images, name, openDetails}) => {
    return (
      
           <Col lg={4} md={6} className={CardStyle.member}>
            <div className={CardStyle.memberImg}>
              <LazyLoadImage src={images} className={`img-fluid ${CardStyle.mainImg}`} alt="Student"/>

            </div>
            <div className={`text-center ${CardStyle.memberInfo }`}>
              <h4 className={CardStyle.nameST} onClick={openDetails}>{name}</h4>
            </div>
            
          </Col>
          
    );
}


export default Cards;
