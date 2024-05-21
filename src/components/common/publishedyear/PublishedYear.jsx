import React from 'react';
import headstyle from '../publishedyear/PublishedYear.module.css';

const PublishedYear = ({year}) => {
    return (
        <div>
            <h1 className={headstyle.Pubheading}>{year}</h1>
        </div>
    )
}

export default PublishedYear;
