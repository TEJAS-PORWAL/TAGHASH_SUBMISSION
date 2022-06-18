import React from 'react'
import './Navbar.css'
function ContactUs() {
  return (
    <div className="fluid-about">
        <div className="col">
            <div className="row">
                <h3>About Us</h3>
            </div>
            <div className='row'>
                <i>Welcome to the About us page of the this website </i>
            </div>
            <div className='row-footer my-3'>
                
                    
                   This website has various features:
                    <ul>  
                        <li>   <b>Email page</b>
                            <ol> That contains all the email sent to you.</ol></li> 
                        <li>  <b> A ToDo list </b>
                            <ol>That contains the list of all the task you have to complete</ol> </li>
                        <li>    <b> Reminder App </b>
                            <ol> That contains all the events you have planned for the future and checkout the previous events planned in the past.</ol>
                        </li>
                        
                    </ul>
                
            </div>
        </div>
    </div>
  )
}

export default ContactUs