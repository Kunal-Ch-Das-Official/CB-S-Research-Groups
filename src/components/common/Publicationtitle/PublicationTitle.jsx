import React from 'react';
import PublicationTitleStyle from '../Publicationtitle/PublicationTitle.module.css';
import { Container } from 'react-bootstrap';

const PublicationTitle = ({id, maintt, togglebtn, navigateli, people, publisheddate}) => {
    return (
        <Container fluid> 
            <h2 className={`text-center fs-5 mx-5 ${PublicationTitleStyle.heading}`}>{id}.  {maintt}</h2>
            <div>
                <p className={PublicationTitleStyle.involvePeople}>{people}</p>
            </div>
            <p className={` text-center ${PublicationTitleStyle.publishedDate}`}>{publisheddate}</p>
            <div className='d-flex justify-content-between mx-5'> 
            <button className='common_btn' onClick={togglebtn}>Read More</button>
            <a href={navigateli} className={`common_btn ${PublicationTitleStyle.aTag}`}>Link</a>
           
            </div>
        </Container>
    )
}

export default PublicationTitle;
