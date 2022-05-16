import './contacts.scss'
import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import { ArrowBack } from '@material-ui/icons'
import {validateEmail} from '../../utils/helpers'
import emailjs from '@emailjs/browser';
import {useForm } from 'react-hook-form';


function Contact() {

const form = useRef();
const [note, setNote] = useState(false)
const [errorMessage, setErrorMessage] = useState(' ');
const [formState, setFormState]= useState({ name: '', email: '', message: ''});
const {email, message} = formState

function handleChange(e) {
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
    setNote(true)
    console.log(formState);
}

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_7t2r09o', 'template_g5nvt1n', form.current, 'XI6nh-ogBRJ61w2mb')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    alert("email sent!");
};

  return (
    <div className='contact' id='contact'>
      <Link to='/'>
        <ArrowBack className='arrow' />
      </Link>
    <div className="left">
      <img src="assets/shake.svg" alt="" />
    </div>
    <div className="right">
      <h2>Contact Info</h2>
    <form ref={form} onSubmit={handleSubmit}>
           <input type="email" placeholder='Email' htmlFor="email" name="email" defaultValue={email} onBlur={handleChange} /> 
           <textarea placeholder='Message' name="message" htmlFor="message" defaultValue={message} onBlur={handleChange} />
       {errorMessage && (
       <div>
           <p className="error-text">{errorMessage}</p>
       </div>
   )}
    <button type="submit" name='submit' value='send'>Submit</button>
    {note && <span> Thanks you! I'll reach out as soon as possible</span>}
    </form>
</div>
</div>
  )
}

export default Contact