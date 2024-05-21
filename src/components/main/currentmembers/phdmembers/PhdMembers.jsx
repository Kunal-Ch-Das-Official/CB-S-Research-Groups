import React, { useCallback, useState } from 'react';
import phdData from '../../../../database/members/phdmembers.json';
import Cards from '../../../common/cards/Cards';
import CardToggle from '../../../common/cardtoggle/CardToggle.jsx';
import { Container, Row } from 'react-bootstrap';
import PhdMembersStyle from '../mscmembers/MscMembers.module.css';
import Swarnendu from '../../../../assets/images/Alumni-img/PHD/Swarnendu Baduri_pic.webp';
import Sangeeta from '../../../../assets/images/Alumni-img/PHD/Sangeeta Ghosh_pic.webp';
import DebasishMember from '../../../../assets/images/Alumni-img/PHD/Debasish Ray_pic.webp';
import Himansu from '../../../../assets/images/Alumni-img/PHD/Himansu Sekhar Sahoo_pic.webp';


const PhdMembers = () => {
const [showHide, setShowHide] = useState(null);

  const handlePopup = useCallback((identifier)=> {
     setShowHide(identifier);
  }, []);

  const handleStopPopup = useCallback(()=>{
    setShowHide(null);
  },[]);

  const phdMemebersImg = {
    'phd_member_no-1.webp' : Swarnendu,
    'phd_member_no-2.webp' : Sangeeta,
    'phd_member_no-3.webp' : DebasishMember,
    'phd_member_no-4.webp' : Himansu
  }
    return (
        <section className={PhdMembersStyle.projectStudent}
        id={PhdMembersStyle.projectStudent}>
      <Container fluid>
        <Row gy={5} className={PhdMembersStyle.row}>
          {
          phdData.map((info) => (
              showHide === info.id 
              ? 
              <CardToggle key={info.id} 
              name={info.name}
              msc={info.msc}
              bsc={info.bsc}
              contact={info.contact}
              email={info.email} 
              closeDetails={handleStopPopup}/>
              :
              <Cards key={info.id}
              images={phdMemebersImg[info.imageUrl]}
              name={info.name}
              openDetails={() => handlePopup(info.id)}/>
              
            ))
          }  
          
        </Row>
        </Container>
        </section>
    )
}

export default PhdMembers;
