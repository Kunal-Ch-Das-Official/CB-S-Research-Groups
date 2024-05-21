import React from 'react';
import HeadingStyle from '../headings/Heading.module.css';

const Heading = ({item}) => {
    return (
        <>
            <h2 className={HeadingStyle.CommonHeading}>{item}</h2>
        </>
    )
}

export default Heading;
