import React, { useEffect } from 'react';
import instumentStyle from './Instument.module.css';
import InstumentalDatabase from '../../database/instument.json';
import PublicationHome from '../../components/main/publicationbanner/PublicationHome.jsx';
import instumentBannerBgImg from '../../assets/images/background/lab-Page-bg.webp';
import InstumentSection from '../../components/main/instumentsection/InstumentSection.jsx';
// ALL IMAGEIMPORTING 
import Instument1 from '../../assets/images/instument-img/Instument-1.webp';
import Instument2 from '../../assets/images/instument-img/Instument-2.webp';
import Instument3 from '../../assets/images/instument-img/Instument-3.webp';
import Instument4 from '../../assets/images/instument-img/Instument-4.webp';
import Instument5 from '../../assets/images/instument-img/Instument-5.webp';
import Instument6 from '../../assets/images/instument-img/Instument-6.webp';
import Instument7 from '../../assets/images/instument-img/Instument-7.webp';
import Instument81 from '../../assets/images/instument-img/Instument-8_1.webp';
import Instument82 from '../../assets/images/instument-img/Instument-8_2.webp';
import Instument9 from '../../assets/images/instument-img/Instument-9.webp';
import Instument10 from '../../assets/images/instument-img/Instument-10.webp';
import Instument11 from '../../assets/images/instument-img/Instument-11.webp';
import Instument12 from '../../assets/images/instument-img/Instument-12.webp';
import Instument13 from '../../assets/images/instument-img/Instument-13.webp';
import { Helmet } from 'react-helmet';

const Instument = () => {
    // SCROLL TO TOP EFFECT 
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, []);

    // INSTUMENT HOME POSTER BACKGROUND IMAGE 
    const instumentBanner = {
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${instumentBannerBgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition : 'center',
        backgroundSize: 'cover',
        paddingTop: '27rem',
        paddingBottom: '10rem',
        
    }
    
    return (
        <>
        
    <Helmet>
      <title>Our Lab Instument </title>
      <meta name="keywords" content="Dr. Chinmoy Bhattacharya, Best Universities in kolkata, westbengal, Best Teacher, Best Professor in Electrochemistry
       Electrochemistry lab, best lab facility,  Science, IIEST Shibpur Kolkata,
        PHD Admission, Masters in Electrochemistry "  />
       <meta name="description" content="Dr. Chinmoy Bhattacharya, Best electrochemistry professor in india"  />
    </Helmet>
            {/* HOME POSTER  */}
            <PublicationHome thisstyle={instumentBanner}/>
            <h1 className={instumentStyle.instumentheading}>Lab Instuments</h1>
            
            {/* FIRST GRID  */}
            <InstumentSection firstimg={Instument1} 
            firsttitle={InstumentalDatabase.instumentGrid1.firstTitle}
            firstpara={InstumentalDatabase.instumentGrid1.firstParagraph}
            secondimg={Instument2}
            secondtitle={InstumentalDatabase.instumentGrid1.secondTitle}
            secondpara={InstumentalDatabase.instumentGrid1.secondParagraph}/>

            {/* SECOND GRID  */}
            <InstumentSection firstimg={Instument3} 
            firsttitle={InstumentalDatabase.instumentGrid2.firstTitle}
            firstpara={InstumentalDatabase.instumentGrid2.firstParagraph}
            secondimg={Instument4}
            secondtitle={InstumentalDatabase.instumentGrid2.secondTitle}
            secondpara={InstumentalDatabase.instumentGrid2.secondParagraph}/>
            
             {/* THIRD GRID  */}
            <InstumentSection firstimg={Instument5} 
            firsttitle={InstumentalDatabase.instumentGrid3.firstTitle}
            firstpara={InstumentalDatabase.instumentGrid3.firstParagraph}
            secondimg={Instument6}
            secondtitle={InstumentalDatabase.instumentGrid3.secondTitle}
            secondpara={InstumentalDatabase.instumentGrid3.secondParagraph}/>
            
            {/* FOURTH GRID  */}
            <InstumentSection firstimg={Instument7} 
            firsttitle={InstumentalDatabase.instumentGrid4.firstTitle}
            firstpara={InstumentalDatabase.instumentGrid4.firstParagraph}
            secondimg={Instument81}
            secondtitle={InstumentalDatabase.instumentGrid4.secondTitle}
            secondpara={InstumentalDatabase.instumentGrid4.secondParagraph}/>

             {/* FIIFTH GRID  */}
            <InstumentSection firstimg={Instument82} 
            firsttitle={InstumentalDatabase.instumentGrid5.firstTitle}
            firstpara={InstumentalDatabase.instumentGrid5.firstParagraph}
            secondimg={Instument9}
            secondtitle={InstumentalDatabase.instumentGrid5.secondTitle}
            secondpara={InstumentalDatabase.instumentGrid5.secondParagraph}/>

             {/* SIXTH GRID  */}
            <InstumentSection firstimg={Instument10} 
            firsttitle={InstumentalDatabase.instumentGrid6.firstTitle}
            firstpara={InstumentalDatabase.instumentGrid6.firstParagraph}
            secondimg={Instument11}
            secondtitle={InstumentalDatabase.instumentGrid6.secondTitle}
            secondpara={InstumentalDatabase.instumentGrid6.secondParagraph}/>

             {/* SEVENTH GRID  */}
            <InstumentSection firstimg={Instument12} 
            firsttitle={InstumentalDatabase.instumentGrid7.firstTitle}
            firstpara={InstumentalDatabase.instumentGrid7.firstParagraph}
            secondimg={Instument13}
            secondtitle={InstumentalDatabase.instumentGrid6.secondTitle}
            secondpara={InstumentalDatabase.instumentGrid6.secondParagraph}/>
            
        </>
    )
}

export default Instument;
