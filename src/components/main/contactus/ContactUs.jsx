import React, { useCallback, useRef, useState } from 'react';
import ContactStyle from './ContactUs.module.css';
import emailjs from '@emailjs/browser';
import { Container } from 'react-bootstrap';
import Alertbox from '../../common/alertbox/Alertbox';


export const ContactUs = () => {

  const [submitSuccess, setSuccess] = useState(false);
  const [submitError, setSubmiterror] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  



  const handleSuccessclose = useCallback(() => {
    setSuccess(false);
  }, [])

  const handleErrorclose = useCallback(() => {
    setSubmiterror(false);
  }, [])

  const nameValue = (event) => {
    let userName = event.target.value;
    setCurrentUser(userName);
  }

  // THE LOGIC GIVEN BY EMAILJS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_liry3f6', 'template_sizjyfo', form.current, {
        publicKey: 'Q5-D25tycGdXljMKP',
      })
      .then(
        () => {
          setSuccess(true);
            form.current.reset();
        },
        () => {
            setSubmiterror(true);
            form.current.reset();
        },
      );
  };

  return (
    // FORM FIELDS 
    
    <Container className='mt-5'>
    <div>
      {submitSuccess == true && <Alertbox username={`Dear, ${currentUser}`}
      content={"YOUR INFORMATION HAS BEEN SUCCESSFULLY SUBMITED !!"}
      closebutton={handleSuccessclose} />
      }
      </div>

      <div>
      {submitError == true && <Alertbox username={`Dear, ${currentUser}`}
      content={"CURRENTLY WE ARE FAILED TO SUBMIT PLEASE TRY AGAIN LATER..."}
      closebutton={handleErrorclose} />
      }
      </div>
      
      <div>
      <h2 className={`text-center mb-5 ${ContactStyle.heading}`}>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} id={ContactStyle.formfelds}>
      <label htmlFor='from_name' className={ContactStyle.inputName}>Your Name : </label>
      <input type="text" name="from_name" id='from_name' onChange={nameValue}
      placeholder='Enter Your Name' className={ContactStyle.inputValue} required/>

      <label htmlFor='from_email' className={ContactStyle.inputName}>Your Email : </label>
      <input type="email" name="from_email" id='from_email'
       placeholder='Enter Your Email'className={ContactStyle.inputEmail}
       required/>


      <label htmlFor='contact' className={ContactStyle.inputName}>Your Contact No : </label>
      <input type="number" name="contact" id='contact'
       placeholder='Enter Your Phone Number'className={ContactStyle.inputValue}
       required />

      <label htmlFor='applyfor' className={ContactStyle.inputName}>Position Apply For : </label>
      <input name="applyfor" id='applyfor'
       placeholder='Enter Your Desire Position' className={ContactStyle.inputValue}
       required/>


      <label htmlFor='user_Message' id='message' className={ContactStyle.inputName}>Message : </label>
      <textarea name="message" id='user_Message' rows={4}
       placeholder='Send Us Some Message' className={ContactStyle.messageInput}/>



      <input type="submit" value="Send" className={`common_btn ${ContactStyle.button}`}/>
    </form>
    </div>

    
    </Container>
    
  );
};