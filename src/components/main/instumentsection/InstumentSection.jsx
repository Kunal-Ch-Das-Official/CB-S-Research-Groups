import React from 'react';
import InstumentSectionStyle from './InstumentSection.module.css';
import { Container, Row, Col} from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const InstumentSection = ({firstimg, firsttitle, firstpara, secondimg, secondtitle, secondpara }) => {
    return (
        <Container className={InstumentSectionStyle.content} id='contenet'>
            <Row className={InstumentSectionStyle.mainRow}>
                <Col lg={6} className={InstumentSectionStyle.columnOne}>
                    <LazyLoadImage src={firstimg} className='img-fluid' alt='instument-Image' 
                    id={InstumentSectionStyle.image}/>
                    <div className={InstumentSectionStyle.wrapper}>
                    <h4 className={InstumentSectionStyle.title}>{firsttitle}</h4>
                    <p className={InstumentSectionStyle.paragraph}>{firstpara}</p>
                    </div>
                </Col>
                <Col lg={6} className={InstumentSectionStyle.columnTwo}>
                    <LazyLoadImage src={secondimg} className='img-fluid' alt='instument-Image'
                    id={InstumentSectionStyle.image}/>
                    <div className={InstumentSectionStyle.wrapper}>
                    <h4 className={InstumentSectionStyle.title}>{secondtitle}</h4>
                    <p className={InstumentSectionStyle.paragraph}>{secondpara}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default InstumentSection;
