import React from 'react';
import alertBoxStyle from './Alertbox.module.css';

const Alertbox = ({username, content, closebutton}) => {
   
    
  return (
<>
  <div className={alertBoxStyle.container}>
  <div className={alertBoxStyle.overlay}></div>
  <div className={alertBoxStyle.alertBox} tabIndex="0">
    <h2 className={`text-center ${alertBoxStyle.heading}`}>{username}</h2>
    <hr />
    <p className={`text-center ${alertBoxStyle.paragraph}`}>{content}</p>
    <hr />
<button className={alertBoxStyle.button} onClick={closebutton}>Close</button>
  </div>
</div>
    </>
  )
}

export default Alertbox;



