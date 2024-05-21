import React, { memo, useEffect } from 'react';
import ProfDataBase from '../../database/professorPage.json';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import ProfHomeStyle from '../professor/professor.module.css';
import profPhoto from '../../assets/images/client/Prof-single-Img.webp';
import SocialHandles from '../../components/common/socialhandles/SocialHandles.jsx';
import CommonAcordion from '../../components/common/accordian/CommonAcordion.jsx';
import Qualification from '../../components/common/qualificationssec/Qualification.jsx';
import UnorderListItem from '../../components/common/totallistItemsection/UnorderListItem.jsx';
import { Helmet } from 'react-helmet';

const Professor = () => {
// SCROLLING TOP EFFECT 
useEffect(()=> {
    window.scrollTo(0, 0);
}, []);
return (
     

<>

    <Helmet>
      <title>Dr. Chinmoy Bhattacharya</title>
      <meta name="keywords" content="Best Professor In Kolkata Westbengal,
      Electrochemistry, Chemistry, Science, Best Lab, Best Equpment"/>
       <meta name="description" content="Dr. Chinmoy Bhattacharya, Best electrochemistry professor in india"  />
    </Helmet>

<Container fluid>

{/* HOME POSTER  */}    
<div className={ProfHomeStyle.wrapperDiv}>
<div className={ProfHomeStyle.BeyondGrid}>
<img src={profPhoto} className={ProfHomeStyle.MainPhoto} 
alt="Professor_Image"/>
</div>
<h3 className={ProfHomeStyle.BeyondGridHeading}>
{ProfDataBase.homeBannersec.clientName}</h3>
<h6 className={ProfHomeStyle.BeyondGridHeading}>
{ProfDataBase.homeBannersec.position}</h6>
</div>

{/* SOCIAL MEDIA ICONS & LINKS CONTAINER            */}
<SocialHandles/>


{/* UNDERNEADH TEXT OF SOCIAL MEDIA ICONS SECTION         */}
<Row className={ProfHomeStyle.GridRow}>
<div className={` my-5 fw-bold ${ProfHomeStyle.colHeading}`}>
{ProfDataBase.colHeadingscontent.heading}</div>


{/* TEACHIRS QUALIFICATION SECTION  */}
<Qualification aqheading={ProfDataBase.qualification.heading} 
qulf1={ProfDataBase.qualification.firstqualification}
qulf2={ProfDataBase.qualification.secondqualification} 
teching={ProfDataBase.qualification.guidetitle}
guide1={ProfDataBase.qualification.giude} 
guide2={ProfDataBase.qualification.working}/>


{/* TEACHING EXPERIENCE OF TEACHER  */}
<UnorderListItem headingtop={"Teachings"} 
requreheads={ProfDataBase.teaching.pgcourse.title}
li1={ProfDataBase.teaching.pgcourse.first}
li2={ProfDataBase.teaching.pgcourse.second}  
li3={ProfDataBase.teaching.pgcourse.third} 
li4={ProfDataBase.teaching.pgcourse.fourth}
nextrequireHeading={ProfDataBase.teaching.ugCourse.title}
li5={ProfDataBase.teaching.ugCourse.first}
li6={ProfDataBase.teaching.ugCourse.second}/>


{/* GIRD LAYOUT STARTS (LEFT GRID) */}
<Col md={6} className={ProfHomeStyle.firstGrid}>

{/* FIRST LEFT ACCORDION  */}
<CommonAcordion className={ProfHomeStyle.firstAQDS} 
Heading={ProfDataBase.accordion.accordionOne.heading}
content0={ProfDataBase.accordion.accordionOne.one}
content1={ProfDataBase.accordion.accordionOne.two}
content3={ProfDataBase.accordion.accordionOne.three} 
content4={ProfDataBase.accordion.accordionOne.four}/>

{/* 1ST LEFT GIRD BOX  */}
<UnorderListItem 
headingtop={ProfDataBase.unorderlist.firstlist.heading}
li1={ProfDataBase.unorderlist.firstlist.one} 
li2={ProfDataBase.unorderlist.firstlist.two}
li3={ProfDataBase.unorderlist.firstlist.three}
li4={ProfDataBase.unorderlist.firstlist.four}
li5={ProfDataBase.unorderlist.firstlist.five}
li6={ProfDataBase.unorderlist.firstlist.six} 
li7={ProfDataBase.unorderlist.firstlist.seven}
li8={ProfDataBase.unorderlist.firstlist.eight}
li9={ProfDataBase.unorderlist.firstlist.nine}
li10={ProfDataBase.unorderlist.firstlist.ten}
li11={ProfDataBase.unorderlist.firstlist.eleven}
li12={ProfDataBase.unorderlist.firstlist.twelve}
li13={ProfDataBase.unorderlist.firstlist.thirteenth}
li14={ProfDataBase.unorderlist.firstlist.fourtheenth}/>


{/* 2ND LEFT GRID BOX */}
<UnorderListItem headingtop={ProfDataBase.unorderlist.secondlist.heading}
li1={ProfDataBase.unorderlist.secondlist.one}
li2={ProfDataBase.unorderlist.secondlist.two}
li3={ProfDataBase.unorderlist.secondlist.three}
li4={ProfDataBase.unorderlist.secondlist.four}/>
</Col>


{/* RIGHT GRID SECTION STARTS  */}
<Col md={6} className={ProfHomeStyle.SecondGrid}>

{/* SECOND RIGHT ACCORDION  */}
<CommonAcordion Heading={ProfDataBase.accordion.accordionTwo.heading}
insideHeading={ProfDataBase.accordion.accordionTwo.insidetitle}
content0={ProfDataBase.accordion.accordionTwo.one} 
content1={ProfDataBase.accordion.accordionTwo.two}
content2={ProfDataBase.accordion.accordionTwo.three}
content3={ProfDataBase.accordion.accordionTwo.four}
content4={ProfDataBase.accordion.accordionTwo.five}
content5={ProfDataBase.accordion.accordionTwo.six} 
content6={ProfDataBase.accordion.accordionTwo.seven} 
content7={ProfDataBase.accordion.accordionTwo.eight} 
content8={ProfDataBase.accordion.accordionTwo.nine} 
content9={ProfDataBase.accordion.accordionTwo.ten} 
content10={ProfDataBase.accordion.accordionTwo.eleven} 
content11={ProfDataBase.accordion.accordionTwo.twelve}
content12={ProfDataBase.accordion.accordionTwo.thirteenth}/>



{/* 1ST RIGHT GRID BOX  */}
<UnorderListItem headingtop={ProfDataBase.unorderlist.thirdlist.heading}
 li1={ProfDataBase.unorderlist.thirdlist.one}
 li2={ProfDataBase.unorderlist.thirdlist.two}
 li3={ProfDataBase.unorderlist.thirdlist.three}
 li4={ProfDataBase.unorderlist.thirdlist.four}
 li5={ProfDataBase.unorderlist.thirdlist.five}
 li6={ProfDataBase.unorderlist.thirdlist.six}
 li7={ProfDataBase.unorderlist.thirdlist.seven} 
 li8={ProfDataBase.unorderlist.thirdlist.eight} 
 li9={ProfDataBase.unorderlist.thirdlist.nine}/>


{/* 2ND RIGHT GRID BOX  */}
<UnorderListItem headingtop={ProfDataBase.unorderlist.fourthlist.heading}
li1={ProfDataBase.unorderlist.fourthlist.one}
li2={ProfDataBase.unorderlist.fourthlist.two}
li3={ProfDataBase.unorderlist.fourthlist.three}
li4={ProfDataBase.unorderlist.fourthlist.four} />

{/* READMORE BUTTON TO NAVIGATE PUBLICATION PAGE   */}
<Link to={'/Publication'} className={`common_btn ${ProfHomeStyle.customBtn}`}>
Read More Publications</Link>

</Col>
</Row>
</Container>  
</>


    )
}

export default memo(Professor);
