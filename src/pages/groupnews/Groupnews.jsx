import React from 'react';
import { Container } from 'react-bootstrap';
import groupnewsStyle from './GroupNews.module.css';
import Gallary from '../../components/main/gallary/Gallary.jsx'
import ShibpurIcon from '../../assets/icon/Shibpur_icon.svg';
import { Helmet } from 'react-helmet';

const Groupnews = () => {
    return (
// MAIN BOX 
<>
    <Helmet>
      <title>Group News</title>
      <meta name="keywords" content="chemistry Dr. Chinmoy Bhattacharya, Best Universities in kolkata, westbengal, Best Teacher, Best Professor in Electrochemistry
       Electrochemistry lab, best lab facility,  Science, IIEST Shibpur Kolkata,
        PHD Admission, Masters in Electrochemistry "  />
       <meta name="description" content="Dr. Chinmoy Bhattacharya, Best electrochemistry professor in india"  />
    </Helmet>

        <Container className={groupnewsStyle.content}>
        <h3 className={groupnewsStyle.message}>Currently we are unable 
        to showcase the information about Admissions, click the button that given bellow to navigate our Shibpur collage official website
        to learn about Admission status. thanks for visit us. Have a great day.
        </h3>
        
{/* CLICK TO VISIT BUTTON */}
        <a href='https://www.iiests.ac.in/IIEST/Notices/?type=Admission' className='common_btn' id={groupnewsStyle.shibpurBtn}>
            <img src={ShibpurIcon} alt="Collage-icons" className={groupnewsStyle.ShibpurIcon} />
            Click To Visit
        </a>
        
        </Container>
        
        {/* GROUPS PICTURE WITH GRID LAYOUT  */}
        <Gallary />
        
        </>
    )
}

export default Groupnews;
