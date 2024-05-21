import React from 'react';
import PublicationHomeStyle from './PublicationHome.module.css';

const PublicationHome = ({thisheadings, thisparagraph, thisstyle}) => {
    return (
        <>
        <div style={thisstyle}  id="Publicationhome">
        <div className={PublicationHomeStyle.Publicationhomecontent}>
            <h1 className={PublicationHomeStyle.Publicationhomeowner}>{thisheadings}</h1>
            <p className={PublicationHomeStyle.para}>{thisparagraph}</p>
        </div>
    </div>
</>
    )
}

export default PublicationHome;
