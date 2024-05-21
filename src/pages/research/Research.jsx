import React, { memo, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import ResearchDataBase from '../../database/researchPage.json';
import CarouselSection from '../../components/common/carousel/Carousel.jsx';
import ResearchStyle from './Research.module.css';
import Lefthero from '../../components/main/researchhero/lefthero/LeftHero.jsx';
import RightHero from '../../components/main/researchhero/righthero/RightHero.jsx';
import researchImg1 from '../../assets/images/research-page/Researchpage_Corrosion-1.webp';
import researchImg2 from '../../assets/images/research-page/secm_researchpage-2.webp';
import researchImg3 from '../../assets/images/research-page/etalOxide_researchpage-3.webp';
import researchImg4 from '../../assets/images/research-page/photoelectrochemical_researchpage-4.webp';
import researchImg5 from '../../assets/images/research-page/photocatalytic_researchpage-5.webp';
import { Helmet } from 'react-helmet';

const Research = () => {
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, [])

    
    return (
        <>    
        
    <Helmet>
      <title>Research Topic</title>
      <meta name="keywords" content="Best research experience in chemistry Dr. Chinmoy Bhattacharya, Best Universities in kolkata, westbengal, Best Teacher, Best Professor in Electrochemistry
       Electrochemistry lab, best lab facility,  Science, IIEST Shibpur Kolkata,
        PHD Admission, Masters in Electrochemistry "  />
       <meta name="description" content="Dr. Chinmoy Bhattacharya, Best electrochemistry professor in india"  />
    </Helmet>
            {/* CAROUSEL SECTION  */}
            <CarouselSection/>


            {/* RESEARCH SECTION HEADING  */}
           <h1 className='my-5 text-center topic'>Research Topics</h1>


            {/* THE TOTAL GRID SECTION  */}
           <section className={`py-5 ${ResearchStyle.contentWrapper}`}>
           <Container className="text-center">
            <Row className={ResearchStyle.mainContainer}>

             <Lefthero leftheading ={ResearchDataBase.firstresearchhero.title} 
             leftherocontent={ResearchDataBase.firstresearchhero.paragraph}
             leftheroimg={researchImg1} />

             <RightHero rightheading={ResearchDataBase.secondresearchhero.title}
              rightherocontent={ResearchDataBase.secondresearchhero.paragraph}
              rightheroimg={researchImg2}/>

             <Lefthero leftheading={ResearchDataBase.thirdresearchhero.title}
             leftherocontent={ResearchDataBase.thirdresearchhero.paragraph}
             leftheroimg={researchImg3}/>

             <RightHero rightheading={ResearchDataBase.fourthresearchhero.title}
             rightherocontent={ResearchDataBase.fourthresearchhero.paragraph}
             rightheroimg={researchImg4}/>

             <Lefthero leftheading={ResearchDataBase.fifthresearchhero.title}
             leftherocontent={ResearchDataBase.fifthresearchhero.paragraph}
             leftheroimg={researchImg5}/>

            </Row>
            </Container>


           </section>
        </>
    )
}

export default memo(Research);


