import React, { useEffect } from 'react';
import { ContactUs } from '../../components/main/contactus/ContactUs.jsx';
import { Helmet } from 'react-helmet';

const Contact = () => {
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
<Helmet>
       <title>Contact Us For Admissions</title>
       <meta name="keywords" content="chemistry Dr. Chinmoy Bhattacharya, Best Universities in kolkata, westbengal, Best Teacher, Best Professor in Electrochemistry
       Electrochemistry lab, best lab facility,  Science, IIEST Shibpur Kolkata,
       PHD Admission, Masters in Electrochemistry "  />
       <meta name="description" content="Dr. Chinmoy Bhattacharya, Best electrochemistry professor in india"  />
</Helmet>


           <ContactUs/>
        </>
    )
}

export default Contact;
