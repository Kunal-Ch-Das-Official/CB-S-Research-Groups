import React, { memo } from 'react';
import SkeletonStyle from '../skeleton/Skeleton.module.css';
import { Col, Container, Row } from 'react-bootstrap';


const Skeleton = () => {
    return (
        <Container>
            
<Row className={SkeletonStyle.SkeletonRow}>

    <Col md={6}>
    <div className={SkeletonStyle.firstCol}>

    </div>
    </Col>
    <Col md={6}>
    
                <p>
                  <span className={SkeletonStyle.SkeletonBox}></span>
                  <span className={SkeletonStyle.SkeletonBox}></span>
                  <span className={SkeletonStyle.SkeletonBox}></span>
                  <span className={SkeletonStyle.SkeletonBox}></span>
                  <span className={SkeletonStyle.SkeletonBox}></span>
                  <span className={SkeletonStyle.SkeletonBox}></span>
                </p>

    </Col>


    <Col md={6}>
    
    <p>           <span className={SkeletonStyle.SkeletonBox}></span>
                  <span className={SkeletonStyle.SkeletonBox}></span>
                  <span className={SkeletonStyle.SkeletonBox}></span>
                  <span className={SkeletonStyle.SkeletonBox}></span>
                  <span className={SkeletonStyle.SkeletonBox}></span>
                  <span className={SkeletonStyle.SkeletonBox}></span>
                </p>

    </Col>

    <Col md={6}>
    <div className={SkeletonStyle.firstCol}>

    </div>
    </Col>
</Row>


        </Container>
    )
}

export default memo(Skeleton);
