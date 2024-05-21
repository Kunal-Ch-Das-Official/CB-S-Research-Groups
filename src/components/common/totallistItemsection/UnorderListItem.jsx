import React from 'react';
import ListContent from './ListContent';
import UnorderListItemStyle from '../totallistItemsection/UnorderListItem.module.css';

const UnorderListItem = (
    {
     headingtop, requreheads, nextrequireHeading,
     li1, li2, li3, li4, li5, li6, li7, li8, li9,
     li10, li11, li12, li13, li14, li15
    }
                        ) => {

    return (
        
<div className={UnorderListItemStyle.topHoleAccordion}>
<h3 className={` mb-5 ${UnorderListItemStyle.LiHeading}`}>{headingtop}</h3>
<ListContent requireHeading={requreheads}/>
<ListContent licontent={li1}/>
<ListContent licontent={li2}/>
<ListContent licontent={li3}/>
<ListContent licontent={li4}/>
<ListContent requireHeading={nextrequireHeading}/>
<ListContent licontent={li5}/>
<ListContent licontent={li6}/>
<ListContent licontent={li7}/>
<ListContent licontent={li8}/>
<ListContent licontent={li9}/>
<ListContent licontent={li10}/>
<ListContent licontent={li11}/>
<ListContent licontent={li12}/>
<ListContent licontent={li13}/>
<ListContent licontent={li14}/>
<ListContent licontent={li15}/>
</div>

    );
}

export default UnorderListItem;
