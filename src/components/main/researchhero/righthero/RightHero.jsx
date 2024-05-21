import React from 'react';
import RightheroStyle from './RightHero.module.css';
import { Col, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const RightHero = ({rightheading, rightheroimg, rightherocontent}) => {
    return (
        <Row className={` py-5 ${RightheroStyle.mainContent}`}>
    <Col lg={6} className="order-1 order-lg-2">
    <LazyLoadImage src={rightheroimg} className="img-fluid" alt="reuseable image not-define"/>
    </Col>

    <Col lg={6} className="pt-4 pt-lg-0 order-2 order-lg-1 px-4">
    <h4 className={RightheroStyle.researchTitle}>{rightheading}</h4>
    <p className={RightheroStyle.researchsummary}>{rightherocontent}
      </p>
    </Col>

  </Row>
    )
}

export default RightHero;
