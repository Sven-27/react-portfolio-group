import React from 'react'
import './ContactForm.css'
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';

function ContactForm() {
    return (
        <div className="contactForm">
        <div className="container d-flex flex-column align-items-center justify-content-center ">
            
            <h1>Contact form</h1>

            <form id="form" target="_blank" action="https://formsubmit.co/coding.with.sven@gmail.com" method="POST" className=""  >
                <div className="form-group">
                    <div className="form-row">
                        <div className="col">
                            <input type="text" name="contactname" className="form-control form-input" placeholder="Full Name" autoComplete="{false}" required />
                        </div>
                        <div className="col">
                            <input type="email" name="email" className="form-control form-input" placeholder="Email Address" required />
                        </div>
                    </div>
                </div>
                <div className="form-group form-textarea">
                    <textarea placeholder="Your Message" rows="14" className="form-control" name="message"
                    required></textarea>
                </div>
                <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
            </form>
        </div>


        {/* Footer Component */}
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__left">
                    <h5><EmailIcon /> coding.with.sven@gmail.com | <PhoneAndroidIcon />+31 (0) 6 10 31 64 36</h5> 
                </div>
                <div className="footer__center">
                      <p>COPYRIGHT &copy; 2021</p>
                </div>
                <div className="footer__right">
                    <a
                    href='https://www.linkedin.com/in/sven-notermans'
                    target='_blank' rel='noreferrer'>
                    <LinkedInIcon />
                     </a>
                     <a
                    href='https://www.facebook.com/Svengebon'
                    target='_blank' rel='noreferrer'>
                    <FacebookIcon />
                     </a>
                    <a
                    href='https://www.instagram.com/svennie_27/'
                    target='_blank' rel='noreferrer'>
                    <InstagramIcon />
                    </a>
                     <a
                    href='https://twitter.com/Sven__27'
                    target='_blank' rel='noreferrer'>
                    <TwitterIcon />
                    </a>
                </div>
            </div>
        </footer>

        </div>
    )
}

export default ContactForm
