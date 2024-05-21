import React from 'react';
import ErrorMessageStyle from './Error.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import ErrorImg from '../../assets/images/essentials/Error-Img.webp';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <div className='bg-white py-5'>
   
   <Container>
    
     <Row>
     <Col lg={6} className={ErrorMessageStyle.ErrorImg}>
       <img src={ErrorImg} alt="Not Found Image" className="img-fluid"/>
       </Col>

       <Col lg={6} className={ErrorMessageStyle.ErrorText}>
         <h2 className={` text-center my-5 ${ErrorMessageStyle.Title}`}>
         The Page You Are Trying To Access Is Outside Of The Universe</h2>
         <p className='text-center my-5'>
         The page you are trying to access doesn’t exist or has been moved.
         Try going back to our homepage.
         </p>
         <Link to={'/'} className={`common_btn ${ErrorMessageStyle.button}`}>Go Back To Home Page</Link> 
         
       </Col>
     </Row>
   </Container>
 </div>
        </>
    )
}

export default Error;
