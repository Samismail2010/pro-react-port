import {useState} from 'react'
import Topbar from '../topbar/Topbar'
import Menu from '../menu/Menu'
import './resume.scss'
import { Mail, Phone, PinDrop } from '@material-ui/icons'


function Resume() {

    const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
       
       <div className='main'>
           <div className='top-section'>
               <img src="assets/pro.JPG" alt="" className='profile'/>
               <p className='p1'>Sam <span>Ismail</span></p>
               <p className='p2'>Full Stack Developer</p>
           </div>
           <div className='clearfix'></div>
           <div className='col-div-4'>
               <div className="content-box" style={{paddingLeft: '20px'}} >
                   <p className='head'>Contact</p>
                   <p className='p3'><i><Phone/> </i>&nbsp;&nbsp;
                   (469) 531-8378</p>
                   <p className='p3'><i><Mail/> </i>&nbsp;&nbsp;
                   samismail2010@gmail.com</p>
                   <p className='p3'><i><PinDrop/> </i>&nbsp;&nbsp;
                   2033 Fairview Dr. <br />
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forney, TX 75126</p>

                   <br/>
                   <p className='head'>Skills</p>
                   <ul className='skills'>
                       <li><span>SQL</span></li>
                       <li><span>HTML</span></li>
                       <li><span>CSS</span></li>
                       <li><span>Javascript</span></li>
                       <li><span>React</span></li>
                       <li><span>JQuery</span></li>
                   </ul>

                   <br/>
                   <p className='head'>Certificate</p>
                   <p className='p3'>SMU Fullstack Program</p>

                   <br/>
                   
                   

               </div>
           </div>
           <div className='line'></div>
           <div className='col-div-8'>
               <div className="content-box">  
                    <p className='head'>Profile</p>
                    <p className='p3' style={{fontSize: '14px;'}}> &emsp;Dedicated and efficient front end web developer. Recently earned a certificate in full stack development from SMU coding Bootcamp, equipped with newly developed skills in HTML, JavaScript, CSS, React.JS, as well as modern libraries and framework. <br/>
                    &emsp;Passionate about collaborating and learning with both with others to build meaningful web applications. With each project, my aim is to best engage my audience for an impactful user experience. <br/> &emsp;I’m excited to leverage my skills as part of a fast-paced, quality driven team to build better experiences on the web. </p>

                    <br/>
                    <p className='head'>Experience</p>
                    <p>Lockbox Clerk at <b>Frost Bank</b>  (2020 - Present)</p>
                    <p className='p-4'>
                        <li>Highly confidential and fast pace enviorment</li>
                        <li>Client sensitive documents which requires a high level attention to detail</li>
                        <li>Process and key data entry document with precision</li>
                        <li>Time management is critial as documents must be processed before deadlines</li>
                    </p>
                    <p>Customer Service/Endorsement Agent at <b>Gainsco Insurance</b> <br/>
                    (2018 - 2020) </p>
                    <p className='p-4'> <li>Managing approximately 90 inbound calls per day. Handled licensed agent queues, assisting in executing endorsements, billing concerns as well as basic system troubleshoot.</li>
                    <li>Fast pace, high quality environment. Each call ranged from 2-4 minutes in a friendly and courteous manner</li>
                    <li>Process monthly installments</li>
                    <li>Reinstate policies that are cancelled</li>
                    <li>Providing detailed response concerning coverage and billing for existing customers</li>
                    <li>Verify insurance coverage with lien holders and county authorities</li>
                    <li>Heavily utilized Microsoft office such as Teams, Microsoft Word, and Excel.</li>
                    </p>
                    <p>Production Operator at <b>Texas Instrument</b><br/>
                    (2017 - 2018)</p>
                    <p className='p-4'>
                        <li>Precisely fill unit packaging for retail distribution and sales and assist with managing internal inventory counts.</li>
                        <li>Ensure all quality, safety, and handling procedures are followed by maintaining a clean and organized working environment.</li>
                    </p>
                    <p>Inventory Specialist at <b>Land Rover Dallas</b> <br/>
                    (2014 - 2017)</p>
                    <p className='p-4'>
                        <li>Controlled inventory, loaded and unloaded vehicles. Carefully logging in incoming vehicles into a manual ledger as well as Microsoft excel.</li>
                        <li>Established a well maintain car lot and showroom. Assisted car salesman with delivery of vehicles to clients as well as helping execute a sale.</li>
                    </p>

                    <br/>
                    <p className='head'>education</p>
                    <p>Emmett J Conrad High School (2010)</p>
                    <p>Texas Tech University  (2011-2013)</p>
                    <p>SMU (2021-2022)</p>
               </div>
           </div>
           
       </div> 
    </div>
  )
}

export default Resume