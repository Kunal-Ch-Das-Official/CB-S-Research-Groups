import React  from 'react';
import FooterStyle from './Footer.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import emailIcon from '../../../assets/icon/Email__Icons.svg';
import callIcon from '../../../assets/icon/Call_icons.svg';
import locationIcon from '../../../assets/icon/Location_Icon.svg';
import ShibpurIcon from '../../../assets/icon/Shibpur_icon.svg';
const admission = "https://www.iiests.ac.in/IIEST/Notices/?type=Admission";
const Footer = () => {
    return (
        <Container className={FooterStyle.main}> <hr className='mb-5'/>
            <Row>
                <Col md={6} className={FooterStyle.firstCol}>
                    

                    <h6 className={FooterStyle.brandName}>CB'S Research Group</h6>
                    <ol>
                    <li className={FooterStyle.listStyle}>
                    <LazyLoadImage className={FooterStyle.IconStyle} src={emailIcon} width={30} height={30} alt='Emails-icons'/>
                    <a href="mailto:chinmoy@chem.iiests.ac.in"
                    className={FooterStyle.listStyle}>chinmoy@chem.iiests.ac.in</a>
                    </li>
                    <li className={FooterStyle.listStyle}>
                    <LazyLoadImage className={FooterStyle.IconStyle} src={emailIcon} width={30} height={30} alt='Emails-icons'/>
                    <a href="mailto:cbhattacharya.besus@gmail.com"
                    className={FooterStyle.listStyle}>cbhattacharya.besus@gmail.com</a>
                    </li>
                    <li className={FooterStyle.listStyle}>
                    <LazyLoadImage className={FooterStyle.IconStyle} src={callIcon} width={30} height={30} alt='Phone-number-icons'/>
                    <a href="tel: +918334911400">+ 91 8334-911-400</a></li>
                    <li className={FooterStyle.listStyle}>
                    <LazyLoadImage className={FooterStyle.IconStyle} src={callIcon} width={30} height={30} alt='Phone-number-icons'/>
                    <a href="tel: +917003191127">+ 91 7003-191-127</a></li>
                    </ol>
                </Col>

                <Col md={6} className={FooterStyle.secondCol}> 

                    <div className={FooterStyle.liStyle}>
                        
                        <LazyLoadImage className={FooterStyle.IconStyle} src={locationIcon} width={30} height={30} alt='Location-Icon'/>
                          
                          SCIENCE AND TECHNOLOGY BUILDING, INDIAN INSTITUTE OF ENGINEERING SCIENCE AND TECHNOLOGY Rd, Botanical Garden Area, Howrah, West Bengal 711103</div> 


                          <div className={FooterStyle.liStyle}>
                        <a href={admission} aria-label="IIEST Shibpur College Link">
                        <LazyLoadImage className={FooterStyle.IconStyle} src={ShibpurIcon} width={30} height={30} alt='Shibpur Collage-Logo'/> </a>Shibpur BE
                        PhD positions are available in our lab for this July/December cycle. Click This College Icon to Visit Our Shibpur College Website, Or You Can Send us your contact information on contact page.
                          
                       </div> 



                </Col>
            </Row><hr className='mt-5'/>
            <div className={FooterStyle.copyRight}>Copyright&copy;2024, <span className={FooterStyle.copyRightSpan}>chinmoybhattacharyaelectrochemistry.com</span> All rights reserved!</div>
            <div className={FooterStyle.copyRight}>
                <a href="tel: +919874353723">This Application Is Developed And Maintained By Mr. Kunal Chandra Das.</a></div>
        </Container>
    )
}

export default Footer;
