import React from 'react';
import ListContentStyle from '../totallistItemsection/UnorderListItem.module.css';

const ListContent = ({licontent, requireHeading, nextrequireHeading}) => {
    return (
        <ul className={ListContentStyle.topAccordion}>
            <h5 className={ListContentStyle.RequireHeadingStyle}>{requireHeading}</h5>
            <h5 className={ListContentStyle.RequireHeadingStyle}>{nextrequireHeading}</h5>
         
            <li className={ListContentStyle.topAccordion}>{licontent}</li>

        </ul>
    )
}

export default ListContent;
