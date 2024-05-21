import React from 'react';
import AchivmentStyle from '../achivments/Achivment.module.css';
import { Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import journalImg from '../../../../assets/icon/JournalIcon-min.svg';
import ProjectImg from '../../../../assets/icon/Project-min.svg';
import ConferenceImg from '../../../../assets/icon/Conference-min.svg';

const Achivment = ({publication, journal, conference, projects}) => {
    return (
        <>
            <Row className={AchivmentStyle.achivments}>
              <div className='col md-4 sm-2 lg-6'>

                <h6 className={AchivmentStyle.bottomContent}>{publication}</h6>

                <div className={AchivmentStyle.commonItems}> 
                <LazyLoadImage src={journalImg} alt="Journal-Icon" className={AchivmentStyle.icons} />
                {journal} :<span className=
                {AchivmentStyle.counts}> 55 </span>
                </div>



                <div className={AchivmentStyle.commonItems}>
                <LazyLoadImage src={ConferenceImg} alt="Conference Proceedings-Icon" className={AchivmentStyle.icons} /> 
                {conference} :<span className={AchivmentStyle.counts}>2</span>
                </div>



                <div className={AchivmentStyle.commonItems}>
                <LazyLoadImage src={ProjectImg} className={AchivmentStyle.icons} alt='Projects-Icon'/> {projects} :
                <span className={AchivmentStyle.counts}>8</span></div>
              </div>
            </Row>
        </>
    )
}

export default Achivment;
