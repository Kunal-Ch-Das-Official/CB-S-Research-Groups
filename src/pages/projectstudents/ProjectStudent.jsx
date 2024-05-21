import React, { useCallback, useState } from 'react';
import mscAlumniData from '../../database/alumnis/projectalumni.json';
import ProjectStudentStyle from './ProjectStudent.module.css';
import Cards from '../../components/common/cards/Cards.jsx';
import { Container, Row } from 'react-bootstrap';
import CardToggle from '../../components/common/cardtoggle/CardToggle.jsx';
import Aditya from '../../assets/images/Alumni-img/MSC/Aditya Poddar_pic.webp';
import Krishna from '../../assets/images/Alumni-img/MSC/Krishna Majhi_pic.webp';
import Jyotirmoy from '../../assets/images/Alumni-img/MSC/Jyotirmoy Sardar_pic.webp';
import { Helmet } from 'react-helmet';

const ProjectStudent = () => {
  const [showhide, setShowhide] = useState(null);

  const handleToggleEvent = useCallback((identifier) => {
    setShowhide(identifier);
  },[]);
  const handleCloseEvent = 
  useCallback(()=> setShowhide(null), []);

  const projectAlumniImg = {
    'project_alumni_no-1.webp' : Aditya,
    'project_alumni_no-2.webp' : Krishna,
    'project_alumni_no-3.webp' : Jyotirmoy
  }
  
    return (
          // ALUMNI PAGE MSC STUDENT SECTION 
          <section className={ProjectStudentStyle.projectStudent}
            id={ProjectStudentStyle.projectStudent}>
   <Helmet>
      <title>Meet Our Alumni</title>
      <meta name="keywords" content=" best researcher Dr. Chinmoy Bhattacharya, Best Universities in kolkata, westbengal, Best Teacher, Best Professor in Electrochemistry
       Electrochemistry lab, best lab facility,  Science, IIEST Shibpur Kolkata,
        PHD Admission, Masters in Electrochemistry "  />
       <meta name="description" content="Dr. Chinmoy Bhattacharya, Best electrochemistry professor in india"  />
    </Helmet>
            <Container fluid>
            <Row gy={5} className={ProjectStudentStyle.row}>
            {
            mscAlumniData.map((items) => (
              showhide === items.id 
              ?
              <CardToggle key={items.id}
              name={items.name}
              msc={items.msc}
              bsc={items.bsc}
              contact={items.contact}
              email={items.email}
              closeDetails={handleCloseEvent} />
              :
              <Cards key={items.id}
              images={projectAlumniImg[items.imageUrl]}
              name={items.name}
              openDetails={ () => 
              handleToggleEvent(items.id)} />
              
            ))
            }
            </Row>
            </Container>
            </section>
    )
}

export default ProjectStudent;
