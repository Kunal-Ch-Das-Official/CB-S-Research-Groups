import React, { useCallback, useState } from 'react';
import projectData from '../../../../database/members/projectmembers.json';
import { Container, Row } from 'react-bootstrap';
import Cards from '../../../common/cards/Cards.jsx';
import CardToggle from '../../../common/cardtoggle/CardToggle.jsx';
import MscMembersStyle from './MscMembers.module.css';
import Yadhukrishna from '../../../../assets/images/Alumni-img/MSC/Yadhukrishna K M_pic.webp';
import Sumana from '../../../../assets/images/Alumni-img/MSC/Sumana Rana_pic.webp';
import Debdeep from '../../../../assets/images/Alumni-img/MSC/Debdeep Dhabal_pic.webp';
import Nayna from '../../../../assets/images/Alumni-img/MSC/Nayna Sharma_pic.webp';
import Aryan from '../../../../assets/images/Alumni-img/MSC/Aryan Singh_pic.webp';
const MscMembers = () => {
  const [showState, setShowState] = useState(null);

  const handlePopupEvent = useCallback((indentifier) => {
        setShowState(indentifier);
  }, [])
  const handleCloseEvent = 
  useCallback(() => setShowState(null), []);

  const mscMembersImg = {
    'msc_member_no-1.webp' : Yadhukrishna,
    'msc_member_no-2.webp' : Sumana,
    'msc_member_no-3.webp' : Debdeep,
    'msc_member_no-4.webp' : Nayna,
    'msc_member_no-5.webp' : Aryan
  }
    return (
        
      // CURRENT MEMBERS MSC STUDENTS 
        <section className={MscMembersStyle.projectStudent}
        id={MscMembersStyle.projectStudent}>
        <Container fluid>
        <Row gy={5} className={MscMembersStyle.row}>

        {
          projectData.map((information) => (
            showState === information.id
            ?
            <CardToggle key={information.id}
            name={information.name}
            year={information.year}
            msc={information.msc}
            bsc={information.bsc}
            contact={information.contact}
            email={information.email}
            closeDetails={handleCloseEvent}/>
            :
            <Cards key={information.id}
            images={mscMembersImg[information.imageUrl]}
            name={information.name}
            openDetails={ () => handlePopupEvent(information.id)} />
          ))
        }
        </Row>
        </Container>

        </section>
    )
}

export default MscMembers;
