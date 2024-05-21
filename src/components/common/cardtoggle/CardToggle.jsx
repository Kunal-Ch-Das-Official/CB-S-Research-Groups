import React from 'react';
import CardToggleStyle from './CardToggle.module.css';
import CrossIcon from '../../../assets/icon/cross-icon.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container } from 'react-bootstrap';

const CardToggle = ({ name, year, msc, bsc, contact, email,
     topic, details, closeDetails}) => {
    return (
        <Container className={CardToggleStyle.contents}>
            <LazyLoadImage src={CrossIcon} onClick={closeDetails}
            className={`img-fluid ${CardToggleStyle.closeBtn}`}
            alt='Click Here To Close The Tab' height={30} width={30}/>
        <div className={CardToggleStyle.wrapper}>
             <h2 className={CardToggleStyle.name}>{name}</h2>
             <div className={CardToggleStyle.studies}>{year}</div>
             <div className={CardToggleStyle.studies}>{msc}</div>
             <div className={CardToggleStyle.studies}>{bsc}</div>
             <div className={CardToggleStyle.studies}>{contact}</div>
             <div className={CardToggleStyle.email}>
             <span className={CardToggleStyle.emailSpan}>EMAIL ID :
             </span>{email}</div>
             <div className={CardToggleStyle.studies}>{topic}</div>
             <p className={CardToggleStyle.details}>{details}</p>

             </div>
        </Container>
    )
}

export default CardToggle;
