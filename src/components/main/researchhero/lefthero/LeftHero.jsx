import React from 'react';
import LeftheroStyle from './LeftHero.module.css';
import { Col, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Lefthero = ({leftheading, leftheroimg, leftherocontent}) => {
    return (
        <Row className={` py-3 ${LeftheroStyle.mainContent}`}>
        <Col lg={6}>
          <LazyLoadImage src={leftheroimg} className="img-fluid" alt="reuseable Image Not-define"/>
        </Col>
        <Col lg={6} className="pt-5 pt-lg-0">
          <h4 className={LeftheroStyle.researchTitle}>
          {leftheading}</h4>
          <p className={LeftheroStyle.researchsummary}>
          {leftherocontent}
          </p>
        </Col>
      </Row>
    )
}

export default Lefthero;
