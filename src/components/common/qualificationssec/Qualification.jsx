import React from 'react';
import QualificationStyles from '../qualificationssec/Qualification.module.css';
import { Col, Row } from 'react-bootstrap';


const Qualification = ({aqheading, qulf1, qulf2, teching, guide1, guide2 }) => {
    return (
        <>
         <Row className={QualificationStyles.AQRow}>
            <h4 className='text-center my-4 fw-bold'>{aqheading}</h4>
            <Col className='text-end mb-5 fw-bold'>{qulf1}</Col>
            <Col className='text-start mb-5 fw-bold'>{qulf2}</Col>
            <h4 className='text-center mb-4 fw-bold'>{teching}</h4>
            <Col className='text-end mb-5 fw-bold'>{guide1}</Col>
            <Col className='text-start mb-5 fw-bold'>{guide2}</Col>
           </Row>
        </>
        
    )
}

export default Qualification;
