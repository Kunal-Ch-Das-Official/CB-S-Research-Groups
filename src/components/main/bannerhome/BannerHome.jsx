import React from 'react';
import BannerHomeStyle from '../bannerhome/BannerHome.module.css';
import { Link } from 'react-router-dom';


const BannerHome = ({headings, paragraph, path, btntext}) => {

    return (
        <>

                <div className={BannerHomeStyle.home}  id="home">
                <div className={BannerHomeStyle.content}>
                    <h1 className={BannerHomeStyle.owner}>{headings}</h1>
                    <p>{paragraph}</p>
                     <Link to={path} className='common_btn'>{btntext}</Link>
                </div>
            </div>
        </>
    )
}

export default BannerHome;
