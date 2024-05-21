import React from 'react';
import SocialHandleStyle from '../socialhandles/SocialHandles.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import GoogleScholarIcon from '../../../assets/icon/google_scholar.svg';
import ResearchGateIcon from '../../../assets/icon/Research_gate.svg';
import VidyanIcon from '../../../assets/icon/vidyan_icon.svg';
import ScopusIcon from '../../../assets/icon/scopus_icon.svg';
import OrcidIcon from '../../../assets/icon/Orcid_icon.svg';
const GoogleScholar = 'https://scholar.google.com/citations?user=7Be7e7IAAAAJ&hl=en';
const ResearchGate = 'https://www.researchgate.net/profile/Chinmoy-Bhattacharya-2';
const Vidyan = 'https://vidwan.inflibnet.ac.in/profile/93345';
const Scopus = 'https://www.scopus.com/authid/detail.uri?authorId=7006023691';
const Orcid = 'https://orcid.org/0000-0003-2370-7108';


const SocialHandles = () => {

    return (
        <>
                            <div className={SocialHandleStyle.BothlinkIcon}>
                            <a href={GoogleScholar}> 
                                 <LazyLoadImage src={GoogleScholarIcon} width={30} height={30} className={SocialHandleStyle.linkIcon} alt='Google_Scholar_Icon'/>GoogleScholar
                            </a>
                            <a href={ResearchGate}>
                                 <LazyLoadImage src={ResearchGateIcon} width={30} height={30} className={SocialHandleStyle.linkIcon} alt='ResearchGate_Icon'/> ResearchGate
                            </a>
                            <a href={Vidyan}>
                                 <LazyLoadImage src={VidyanIcon} width={30} height={30} className={SocialHandleStyle.linkIcon} alt='ResearchGate_Icon'/> Vidyan
                            </a>
                            <a href={Scopus}>
                                 <LazyLoadImage src={ScopusIcon} width={30} height={30} className={SocialHandleStyle.linkIcon} alt='ResearchGate_Icon'/> Scopus
                            </a>
                            <a href={Orcid}>
                                 <LazyLoadImage src={OrcidIcon} width={30} height={30} className={SocialHandleStyle.linkIcon} alt='ResearchGate_Icon'/> Orcid
                            </a>
                          </div>
        </>
    )
}

export default SocialHandles;
