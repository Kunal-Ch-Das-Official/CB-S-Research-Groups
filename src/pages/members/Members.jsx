import React, { useEffect } from 'react';
import MemberHome from '../../components/main/memberhome/MemberHome.jsx';
import MscMembers from '../../components/main/currentmembers/mscmembers/MscMembers.jsx';
import PublishedYear from '../../components/common/publishedyear/PublishedYear';
import PhdMembers from '../../components/main/currentmembers/phdmembers/PhdMembers.jsx';
import { Helmet } from 'react-helmet';


const Members = () => {
  useEffect(()=> {
    window.scrollTo(0, 0);
}, []);


       return (
        <>
        
    <Helmet>
      <title>Current Members</title>
      <meta name="keywords" content=" fast degree Dr. Chinmoy Bhattacharya, Best Universities in kolkata, westbengal, Best Teacher, Best Professor in Electrochemistry
       Electrochemistry lab, best lab facility,  Science, IIEST Shibpur Kolkata,
        PHD Admission, Masters in Electrochemistry "  />
       <meta name="description" content="Dr. Chinmoy Bhattacharya, Best electrochemistry professor in india"  />
    </Helmet>
          {/* HOME POSTER  */}
          <MemberHome/>


          {/* CURRENT MEMBER COURSE HEADING  */}
          <PublishedYear year={"PHD MEMBERS"}/>

          {/* CURRENT MEMBER CORESPONDING SECTION  */}
          <PhdMembers/>
          
          {/* CURRENT MEMBER COURSE HEADING  */}
          <PublishedYear year={"MSC MEMBERS"}/>

          {/* CURRENT MEMBER CORESPONDING SECTION  */}
          <MscMembers/>


        </>
    )
}

export default Members;
