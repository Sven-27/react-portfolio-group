import React from 'react'
import './ContactForm.css'

function ContactForm() {
    return (
        <div className="contactForm">
        <div className="container d-flex flex-column align-items-center justify-content-center mt-6">
            
            <h1>Contact form</h1>

            <form id="form" target="_blank" action="https://formsubmit.co/coding.with.sven@gmail.com" method="POST" className="m-auto col-sm-12 col-md-8 col-lg-5 m-lg-0"  >
                <div className="form-group">
                    <div className="form-row">
                        <div className="col">
                            <input type="text" name="contactname" className="form-control" placeholder="Full Name" autoComplete="{false}" required />
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

        {/* Footer Component */}
        <div className="footer">

            <div className="back__totop">
                {/* <a href='#top'><h4>Back to Top</h4></a> */}
            </div>

            <div className="footer__links__container">

                <div className="links__container">
                    <h3 className="footer__links__head">Links</h3>
                    <div className="links_part1">
                        <div>
                            <a className="footer__links__nav" alt="" href="#">Home</a>
                            <a className="footer__links__nav" alt="" href="#">Contact</a>
                            <a className="footer__links__nav" alt="" href="#">Projects</a>
                            <a className="footer__links__nav" alt="" href="#">Blog</a>
                        </div>
                    </div>
                </div>

                <div className="links__container">
                    <h3 className="footer__links__head">Learn From Me</h3>
                    <a className="footer__links__nav" alt="" href="#">Consulting</a>
                    <a className="footer__links__nav" alt="" href="#">Coaching</a>
                    <a className="footer__links__nav" alt="" href="#">Freelance Projects</a>

                </div>

                <div className="links__container">
                    <h3 className="footer__links__head">My Favorite Resources</h3>
                    <a className="footer__links__nav" alt="" href="#">VS Code</a>
                    <a className="footer__links__nav" alt="" href="#">ReactJS</a>
                    <a className="footer__links__nav" alt="" href="#">Font Awesome</a>
                    <a className="footer__links__nav" alt="" href="#">Bootstrap</a>
                </div>

                <div className="links__container">
                    <h3 className="footer__links__head">Let Me Help You</h3>
                    <a className="footer__links__nav" alt="" href="#">Contact Me</a>
                    <a className="footer__links__nav" alt="" href="#">Your Account</a>
                    <a className="footer__links__nav" alt="" href="#">Your Orders</a>
                    <a className="footer__links__nav" alt="" href="#">Rates & Policies</a>
                </div>

            </div>

            <div className="footer__logo__container">
                <img className="footer__logo" alt="" src="./footer_logo.png" />
            </div>

        </div>
        </div>
    )
}

export default ContactForm
