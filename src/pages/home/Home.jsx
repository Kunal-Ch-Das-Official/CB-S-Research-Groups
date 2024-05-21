import React, { Suspense, lazy, memo, useEffect } from 'react';
import HomeDataBase from '../../database/homePage.json';
import HomeStyle from '../home/Home.module.css';
import TickIcon from '../../assets/icon/GreenTick.svg';
import ReOvvHeroImage from '../../assets/images/essentials/Home-Page-Img-2.webp';
import ProfessorPic from '../../assets/images/client/Home-Prof-img.webp';
import BannerHome from '../../components/main/bannerhome/BannerHome';
import { Helmet } from 'react-helmet';
const Heading = lazy(()=> import('../../components/common/headings/Heading.jsx'));
const ProfOverview = lazy(()=> import('../../components/main/profoverview/ProfOverview.jsx'));
const ResearchOverview = lazy(()=> import('../../components/main/researchoverview/ResearchOverview.jsx'));

const Home = () => {
    // SCROLL TO TOP EFFECTS 
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        
    <Helmet>
      <title>CB-S-Research-Group</title>
      <meta name="keywords" content="Dr. Chinmoy Bhattacharya, Best Universities in kolkata, westbengal, Best Teacher, Best Professor in Electrochemistry
       Electrochemistry lab, best lab facility,  Science, IIEST Shibpur Kolkata,
        PHD Admission, Masters in Electrochemistry "  />
       <meta name="description" content="Dr. Chinmoy Bhattacharya, Best electrochemistry professor in india"  />
    </Helmet>
              {/* FIRST POSTER OF THE PAGE  */}
              <BannerHome headings={HomeDataBase.bannercontent.heading}
              paragraph ={HomeDataBase.bannercontent.paragraph} path={'/Research'} btntext={'Read More'}/> 


              {/* PROFESSOR OVERVIEW HEADING  */}
              <Suspense fallback={'Loading...'}>
              <Heading item={"Our Professor"} />
              </Suspense>

              {/* PROFESSOR OVERVIEW SECTION */}
              <Suspense fallback={'Loading...'}>
              <ProfOverview name = {HomeDataBase.firstHerosec.heading} possition = {HomeDataBase.firstHerosec.title} 
              description = {HomeDataBase.firstHerosec.paragraph} professorimg={ProfessorPic} />
              </Suspense>

              {/* RESEARCH OVERVIEW SECTION WITH HEADING  */}
              <Suspense fallback={'Loading..'}> 
              <h2 className={` lg-mt-2 ${HomeStyle.researchoverviewHeading}`}>Research Overview</h2>
              <ResearchOverview subjecttitle={HomeDataBase.secondHerosec.heading} firstchild={HomeDataBase.secondHerosec.firstlist}
              secondchild={HomeDataBase.secondHerosec.secondlist}
              thirdchild={HomeDataBase.secondHerosec.thirdlist}
              fourthchild={HomeDataBase.secondHerosec.fourthlist} tickicon={TickIcon} heroimage={ReOvvHeroImage}
              />
              </Suspense>

             
        </>
    )
}

export default memo(Home);
