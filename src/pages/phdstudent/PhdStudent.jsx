import React, { useCallback, useState } from 'react';
import ProjectStudentStyle from './PhdStudent.module.css';
import Cards from '../../components/common/cards/Cards.jsx';
import { Container, Row } from 'react-bootstrap';
import phdAlumniData from '../../database/alumnis/phdalumni.json';
import CardToggle from '../../components/common/cardtoggle/CardToggle.jsx';
import sanjib from '../../assets/images/Alumni-img/PHD/sanjib shyamal pic.webp';
import Paramita from '../../assets/images/Alumni-img/PHD/Paramita Hajra pic.webp';
import Harahari from '../../assets/images/Alumni-img/PHD/Harahari Mandal pic.webp';
import Debasis from '../../assets/images/Alumni-img/PHD/Debasis Sariket_pic.webp';
import Jitendra from '../../assets/images/Alumni-img/PHD/Jitendra Kumar singh_pic.webp';
import Mukul from '../../assets/images/Alumni-img/PHD/Mukul Hazra_pic.webp';
import { Helmet } from 'react-helmet';



const PhdStudent = () => {
    const [openCloseState, setOpenCloseState] = useState(null);

    const handleToggleFunc = useCallback((identifier) => {
        setOpenCloseState(identifier);
    }, []);

    const handleCloseToggleFunc = 
    useCallback(() => setOpenCloseState(null), []);

    const phdAlumniImg = {
        'phd_alumni_no-1.webp' : sanjib,
        'phd_alumni_no-2.webp' : Paramita,
        'phd_alumni_no-3.webp' : Harahari,
        'phd_alumni_no-4.webp' : Debasis,
        'phd_alumni_no-5.webp' : Jitendra,
        'phd_alumni_no-6.webp' : Mukul
    }

    return (
        
        
              // PHD STUDENT SECTION 
              <section className={ProjectStudentStyle.projectStudent}
              id={ProjectStudentStyle.projectStudent}>
    <Helmet>
      <title>PHD Degree In Three Year </title>
      <meta name="keywords" content=" PHD Degree In Three Year, Dr. Chinmoy Bhattacharya, Best Universities in kolkata, westbengal, Best Teacher, Best Professor in Electrochemistry
       Electrochemistry lab, best lab facility,  Science, IIEST Shibpur Kolkata,
        PHD Admission, Masters in Electrochemistry "  />
       <meta name="description" content="Dr. Chinmoy Bhattacharya, Best electrochemistry professor in india"  />
    </Helmet>
              <Container fluid>
              <Row gy={5} className={ProjectStudentStyle.row}>
                
               
               {
                phdAlumniData.map((data) => (
                    openCloseState === data.id
                    ?
                    <CardToggle key={data.id}
                    name={data.name}
                    msc={data.msc}
                    bsc={data.bsc}
                    contact={data.contact}
                    email={data.email}
                    closeDetails={handleCloseToggleFunc}/>
                    :
                    <Cards key={data.id} 
                    images={phdAlumniImg[data.imageUrl]} 
                    name={data.name}
                    openDetails={ () => 
                    handleToggleFunc(data.id)} />
                    
                ))
               }
            
              </Row>
              </Container>
              </section>  
        
    )
}

export default PhdStudent;
