import './contacts.scss'
import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import { Home } from '@material-ui/icons'
import {validateEmail} from '../../utils/helpers'
import emailjs from '@emailjs/browser';
import Topbar from '../topbar/Topbar'
import Menu from '../menu/Menu'





function Contact() {
const[menuOpen, setMenuOpen] = useState(false)
const [errorMessage, setErrorMessage] = useState(' ');
const [formState, setFormState]= useState({ name: '', email: '', message: ''});
const {name, email, message} = formState

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
    console.log(formState);

}
     return(
        <div>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
         <div className="container py-4">
             <h2>Contact Info</h2>
             <p className="text-center w-responsive mx-auto mb-5">Any questions? Please do not hesitate to contact me directly.</p>
             <form id="contact" onSubmit={handleSubmit}>
                 <div className="mb-3">
                     <label className="form-label" htmlFor="name">Name</label>
                     <input className="form-control" type="text" name="Name" defaultValue={name} onBlur={handleChange} />
                     
                 </div>
                 <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input className="form-control" type="email" name="Email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="mb-2">
                    <label className="form-label" htmlFor="message"></label>
                    <textarea className="form-control" type="message" rows="5" name="Message" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
                <div className='text-center py-2'>
                    <button type="submit">Submit</button>
                </div>
             </form>
             </div>
             </div>
     )
}
export default Contact