import React from 'react';
import PillStyles from './Pills.module.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProjectStudent from '../../../pages/projectstudents/ProjectStudent';
import PhdStudent from '../../../pages/phdstudent/PhdStudent';


const Pills = () => {
    return (
        <div className={PillStyles.wrapperpill} >
<Tabs
      defaultActiveKey="PhdStudent"
      id="justify-tab-example"
      className={`${PillStyles.mainBox}`}
    >

      <Tab eventKey="PhdStudent" title="PHD Student" id='1'
       className={PillStyles.studentTitle}>
        <PhdStudent/>
      </Tab>
      <Tab eventKey="ProjectStudent" title="Project Student" id='2'
       className={PillStyles.studentTitle}>
        <ProjectStudent/>
      </Tab>
    </Tabs>
        </div>
    )
}

export default Pills;
