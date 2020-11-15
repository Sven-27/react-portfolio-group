import React from 'react'
import './ContactForm.css'

function ContactForm() {
    return (
       
    <div>   
        <div classNameName="container">
            <h1 style={{paddingLeft: '15px'}}>Contact form</h1>
            <form target="_blank" action="https://formsubmit.co/tommy_kelly@icloud.com" method="POST" className="col-sm-12 col-md-5 col-lg-5"  >
                <div className="form-group">
                    <div className="form-row">
                        <div className="col">
                            <input type="text" name="name" className="form-control" placeholder="Full Name" required />
                        </div>
                        <div className="col">
                            <input type="email" name="email" className="form-control" placeholder="Email Address" required />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
                </div>
                <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
            </form>
        </div>
    </div>    
   
        
    )
}

export default ContactForm
