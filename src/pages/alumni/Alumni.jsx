import React, { memo, useEffect } from 'react';
import PublicationHome from '../../components/main/publicationbanner/PublicationHome';
import AlumniHomeImg from '../../assets/images/background/Alumni_Banner.webp';
import Pills from '../../components/common/pills/Pills.jsx';
import { Helmet } from 'react-helmet';



const Alumni = () => {
    // Onload Scroll up
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, []);

    // Banner Style
    const thisBGStyle = {
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${AlumniHomeImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition : 'center',
        backgroundSize: 'cover',
        paddingTop: '20rem',
        paddingBottom: '5rem',
    }
    return (
        <>

    <Helmet>
       <title>Alumni</title>
       <meta name="keywords" content="chemistry Dr. Chinmoy Bhattacharya, Best Universities in kolkata, westbengal, Best Teacher, Best Professor in Electrochemistry
       Electrochemistry lab, best lab facility,  Science, IIEST Shibpur Kolkata,
        PHD Admission, Masters in Electrochemistry "  />
       <meta name="description" content="Dr. Chinmoy Bhattacharya, Best electrochemistry professor in india"  />
    </Helmet>


{/* Home Banner  */}
            <PublicationHome thisstyle={thisBGStyle}
            thisheadings={"Meet Our Alumni"}
            />

{/* Pills Navbar */}
            <Pills/>
        </>
    )
}

export default memo(Alumni);
