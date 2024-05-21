import React, { memo, useState, useEffect, useCallback } from 'react';
import PublicationInfo from '../../database/publicationContent.json';
import PublicationTitle from '../../components/common/Publicationtitle/PublicationTitle.jsx';
import ToggleItem from '../../components/common/toggleitem/ToggleItem.jsx';
import PublishedYear from '../../components/common/publishedyear/PublishedYear.jsx';
import PublicationHome from '../../components/main/publicationbanner/PublicationHome.jsx';
import PublicationHomebanner from '../../assets/images/background/HomeBanner-min.webp';
import toggleImage_1 from '../../assets/images/publications-vr/Publication_1_img.webp';
import toggleImage_2 from '../../assets/images/publications-vr/Publication_2_Img.webp';
import toggleImage_3 from '../../assets/images/publications-vr/Publication-img-3.webp';
import toggleImage_4 from '../../assets/images/publications-vr/Publication_4_Img.webp';
import toggleImage_5 from '../../assets/images/publications-vr/Publication_5_Img.webp';
import toggleImage_6 from '../../assets/images/publications-vr/Publication_6_img.webp';
import toggleImage_7 from '../../assets/images/publications-vr/Publication_7_img.webp';
import toggleImage_8 from '../../assets/images/publications-vr/Publication_8_img.webp';
import toggleImage_9 from '../../assets/images/publications-vr/Publication-img-9.webp';
import toggleImage_10 from '../../assets/images/publications-vr/Publication-img-10.webp';
import toggleImage_11 from '../../assets/images/publications-vr/Publication-img-11.webp';
import toggleImage_12 from '../../assets/images/publications-vr/Publication_12_img.webp';
import toggleImage_13 from '../../assets/images/publications-vr/Publication_13_img.webp';
import toggleImage_14 from '../../assets/images/publications-vr/Publication_14_img.webp';
import toggleImage_15 from '../../assets/images/publications-vr/Publication_15_img.webp';
import toggleImage_16 from '../../assets/images/publications-vr/Publication-img-16.webp';
import toggleImage_17 from '../../assets/images/publications-vr/Publication_17_img.webp';
import toggleImage_18 from '../../assets/images/publications-vr/Publication-img-18.webp';
import toggleImage_19 from '../../assets/images/publications-vr/Publication_19_img.webp';
import toggleImage_20 from '../../assets/images/publications-vr/Publication-img-20.webp';
import toggleImage_21 from '../../assets/images/publications-vr/Publication-img-21.webp';
import toggleImage_22 from '../../assets/images/publications-vr/Publication-img-22.webp';
import toggleImage_23 from '../../assets/images/publications-vr/Publication_23_img.webp';
import toggleImage_24 from '../../assets/images/publications-vr/Publication-img-24.webp';
import toggleImage_25 from '../../assets/images/publications-vr/Publication-img-25.webp';
import toggleImage_26 from '../../assets/images/publications-vr/Publication-img-26.webp';
import toggleImage_27 from '../../assets/images/publications-vr/Publication-img-27.webp';
import toggleImage_28 from '../../assets/images/publications-vr/Publication_28_img.webp';
import toggleImage_29 from '../../assets/images/publications-vr/Publication_29_img.webp';
import toggleImage_30 from '../../assets/images/publications-vr/Publication_30_img.webp';
import toggleImage_31 from '../../assets/images/publications-vr/Publication_31_img.webp';
import toggleImage_32 from '../../assets/images/publications-vr/Publication_32_img.webp';
import { Helmet } from 'react-helmet';




const Publication = () => {
  // SCROLLING TOP EFFECT 
    useEffect(()=> {
        window.scrollTo(0, 0);
    }, []);

    // HOME POSTER 
    const bgStyle = {
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${PublicationHomebanner})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition : 'center',
        backgroundSize: 'cover',
        paddingTop: '7rem',
        paddingBottom: '5rem',
    }

    const [toggleComp, setToggleComp] = useState(null);
    // OPEN TOGGLE HANDELER
    const toggleFunc = useCallback((comp) => {
      setToggleComp(comp);
    },[setToggleComp])

    // CLOSE TOGGLE HANDELER
    const toggleClose = useCallback(() => {
      setToggleComp(null);
    },[setToggleComp])

  const publicationToggleImg = {
    'Publication_toggle_image_no-1' : toggleImage_1,
    'Publication_toggle_image_no-2' : toggleImage_2,
    'Publication_toggle_image_no-3' : toggleImage_3,
    'Publication_toggle_image_no-4' : toggleImage_4,
    'Publication_toggle_image_no-5' : toggleImage_5,
    'Publication_toggle_image_no-6' : toggleImage_6,
    'Publication_toggle_image_no-7' : toggleImage_7,
    'Publication_toggle_image_no-8' : toggleImage_8,
    'Publication_toggle_image_no-9' : toggleImage_9,
    'Publication_toggle_image_no-10' : toggleImage_10,
    'Publication_toggle_image_no-11' : toggleImage_11,
    'Publication_toggle_image_no-12' : toggleImage_12,
    'Publication_toggle_image_no-13' : toggleImage_13,
    'Publication_toggle_image_no-14' : toggleImage_14,
    'Publication_toggle_image_no-15' : toggleImage_15,
    'Publication_toggle_image_no-16' : toggleImage_16,
    'Publication_toggle_image_no-17' : toggleImage_17,
    'Publication_toggle_image_no-18' : toggleImage_18,
    'Publication_toggle_image_no-19' : toggleImage_19,
    'Publication_toggle_image_no-20' : toggleImage_20,
    'Publication_toggle_image_no-21' : toggleImage_21,
    'Publication_toggle_image_no-22' : toggleImage_22,
    'Publication_toggle_image_no-23' : toggleImage_23,
    'Publication_toggle_image_no-24' : toggleImage_24,
    'Publication_toggle_image_no-25' : toggleImage_25,
    'Publication_toggle_image_no-26' : toggleImage_26,
    'Publication_toggle_image_no-27' : toggleImage_27,
    'Publication_toggle_image_no-28' : toggleImage_28,
    'Publication_toggle_image_no-29' : toggleImage_29,
    'Publication_toggle_image_no-30' : toggleImage_30,
    'Publication_toggle_image_no-31' : toggleImage_31,
    'Publication_toggle_image_no-32' : toggleImage_32
  }
    

    return (

        //  ONLY THE FIRST SECTION HAS BEEN COMMENTING BECAUSE ALL 32 SECTIONS ARE SAME AS FIRST.
        <>
    <Helmet>
      <title>Publications</title>
      <meta name="keywords" content="Top class Publication Dr. Chinmoy Bhattacharya, Best Universities in kolkata, westbengal, Best Teacher, Best Professor in Electrochemistry
       Electrochemistry lab, best lab facility,  Science, IIEST Shibpur Kolkata,
        PHD Admission, Masters in Electrochemistry "  />
       <meta name="description" content="Dr. Chinmoy Bhattacharya, Best electrochemistry professor in india"  />
    </Helmet>
           {/* HOME POSTER  */}
           <PublicationHome thisstyle={bgStyle}
           thisheadings={"Welcome To Our Publication Page"}
           thisparagraph={"Our research work mainly focusses on different synthetic routes of various photocatalysts or semiconductors that are basically oxides of inorganic compound. Using these, we check their photoelectrochemical and photocatalytic activity so that they can be useful in the modern world. Additionally, our research group also works in the field of Corrosion Chemistry. All the published papers till date has been provided here, you can freely access them and get a thorough understanding about the research work of our lab."}/> 

          {
            PublicationInfo.map((content, index) => (

            <div key={content.id}>
            {content.year && 
             <PublishedYear key={content.id}
             year={content.year} />}
             <hr className='my-5'/>
             {toggleComp === content.id
             ?
             <ToggleItem key={index}
             itemHeading={content.thesis}
             abstractinfo={content.toggleinfo.abstractinfo}
             supportimg={publicationToggleImg[content.toggleinfo.imageURL]}
             close={toggleClose}/>
             :
              <PublicationTitle key={index}
              id={content.id}
              maintt={content.thesis}
              people={content.researcher}
              publisheddate={content.publishdate}
              navigateli={content.link}
              togglebtn={ () => toggleFunc(content.id)} />
             }
              </div>
            ))
          }

        </>
    )
}

export default memo(Publication);
