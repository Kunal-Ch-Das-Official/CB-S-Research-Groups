import React, { memo } from 'react';
import ToggleItemStyle from '../toggleitem/ToggleItem.module.css';
import { Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import crossIcon from '../../../assets/icon/cross-icon.svg';

const ToggleItem = ({itemHeading, abstractinfo, supportimg, supportinghead, supporttext, close}) => {
    return (
        <Container fluid className={ToggleItemStyle.container}>
            
            <LazyLoadImage src={crossIcon} height={35} width={35}
             className={`img-fluid ${ToggleItemStyle.crossicon}`}
              alt='Close' onClick={close}/>
              <h3 className={ToggleItemStyle.toggleTitle}>{itemHeading}</h3>
              <LazyLoadImage src={supportimg} className={`img-fluid ${ToggleItemStyle.abstractImg}`} alt='Supporting Image' />
            <h4 className={ToggleItemStyle.abstract}> Abstract : </h4>
            <p className={ToggleItemStyle.abstracttext}>{abstractinfo}</p>
            
            <h6 className={ToggleItemStyle.supportinghead}>{supportinghead}</h6>
            <p className={ToggleItemStyle.supporttext}>{supporttext}</p>

            
        </Container>
    )
}

export default memo(ToggleItem);
