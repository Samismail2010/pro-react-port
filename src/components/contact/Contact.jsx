import './contacts.scss'
import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import { Home } from '@material-ui/icons'
import {validateEmail} from '../../utils/helpers'
import emailjs from '@emailjs/browser';




function Contact() {

  const [errorMessage, setErrorMessage] = useState(' ');
  const [formState, setFormState]= useState({ name: '', email: '', message: ''});
  const {name, email, message} = formState

  const form = useRef();
  const [done, setDone] = useState(false)

  function sendEmail(e) {
    e.preventDefault();
    emailjs
    .sendForm(
      "service_7t2r09o",
      "template_g5nvt1n",
      form.current,
      "XI6nh-ogBRJ61w2mb"
    )
    .then((result) => {
      console.log(result.text);
      setDone(true)
  }, (error) => {
      console.log(error.text);
  });
  };

  function handleChange(e){
    setFormState({...formState, [e.target.name]: e.target.value})
    if(e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if(!isValid){
        setErrorMessage('Your email is invalid');
      } else {
        setErrorMessage('');
      }
    } else {
      if(!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if(!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value});
    }
  }
  function handleSubmit(e){
    e.preventDefault();
    console.log(formState);
  }

  return(
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <div className="homeicon">
          <Link to='/' style={{textDecoration: 'none', justifyContent: 'space-between'}}>
        <Home fontSize='large'/> Back Home
      </Link>
          </div>
          <h1 className="c-title">Contact</h1>
          <div className="c-info">
            <div className="c-info-item">
            <img src='assets/phone.png' alt="" className='c-icon'/>
            469-531-8378
            </div>
            <div className="c-info-item">
              <img className='c-icon' src='assets/email.png' alt="" />
              samismail2010@gmail.com
            </div>
            <div className="c-info-item">
              <img className='c-icon' src='assets/address.png' alt="" />
              2033 Fairview Dr.
              Forney, Texas
              75126
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
           <b>Wanna Connect?</b> Please do not hesistate to reach out.
           </p>
           <form ref={form} onSubmit={() =>{sendEmail(); handleSubmit()}}>
             <div>
            <label htmlFor="name"></label>
             <input type="text" placeholder='Name' name='name' defaultValue={name} onBlur={handleChange}/>
             </div>
             <div>
            <label htmlFor="subject"></label>
             <input type="text" placeholder='Subject' name='user_subject'/>
             </div>
             <div>
               <label htmlFor="email"></label>
             <input type="email" placeholder='Email' name='email' defaultValue={email} onBlur={handleChange}/>
             </div>
             <div>
               <label htmlFor="message"></label>
             <textarea rows='5' placeholder='Message' name='message' defaultValue={message} onBlur={handleChange}/>
             </div>
             {errorMessage && (
               <div>
                 <p className="error-text">{errorMessage}</p>
               </div>
             )}
             <button>Submit</button>
             {done && "Thank you for reaching out."}
           </form>
        </div>
      </div>
    </div>
  )
  
}

export default Contact