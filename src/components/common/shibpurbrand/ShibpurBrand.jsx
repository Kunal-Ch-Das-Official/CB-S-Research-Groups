import React from 'react';
import ShibpurBrandStyle from './ShibpurBrand.module.css';
import collegeLogo from '../../../assets/images/brandlogo/Indian Institute of Engineering Science and Technology.webp'



const ShibpurBrand = () => {
    return (
        <div className={ShibpurBrandStyle.bg}>
            <img rel="preload" src={collegeLogo} alt='Shibpur BE College-Logo'
             height={40} width={600} className={`img-fluid ${ShibpurBrandStyle.logo}`}/>
        </div>
    )
}



export default ShibpurBrand;
