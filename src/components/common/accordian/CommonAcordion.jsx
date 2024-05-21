import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import CommonAcordionStyle from '../accordian/CommonAcordion.module.css';

const CommonAcordion = ({Heading, insideHeading, content0, content1, content2, content3, 
  content4, content5, content6, content7, content8, content9, content10, content11, content12}) => {
    return (
      
    <Accordion className={CommonAcordionStyle.total} defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header className={CommonAcordionStyle.AQSHearers}>{Heading}</Accordion.Header>
        <Accordion.Body>
          <div className={CommonAcordionStyle.insideHeadingStyle}>{insideHeading}</div>
              <li className={CommonAcordionStyle.Content}>{content0}</li>
              <li className={CommonAcordionStyle.Content}>{content1}</li>
              <li className={CommonAcordionStyle.Content}>{content2}</li>
              <li className={CommonAcordionStyle.Content}>{content3}</li>
              <li className={CommonAcordionStyle.Content}>{content4}</li>
              <li className={CommonAcordionStyle.Content}>{content5}</li>
              <li className={CommonAcordionStyle.Content}>{content6}</li>
              <li className={CommonAcordionStyle.Content}>{content7}</li>
              <li className={CommonAcordionStyle.Content}>{content8}</li>
              <li className={CommonAcordionStyle.Content}>{content9}</li>
              <li className={CommonAcordionStyle.Content}>{content10}</li>
              <li className={CommonAcordionStyle.Content}>{content11}</li>
              <li className={CommonAcordionStyle.Content}>{content12}</li>

        </Accordion.Body>
      </Accordion.Item>
     </Accordion>
  );
}

export default CommonAcordion;
