import React from 'react'
import './Footer3.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer3() {
    return (

        <div className="footer3">

            <div className="back__totop">
                {/* <a href='#top'><h4>Back to Top</h4></a> */}
            </div>

            <div className="media-container-row content mbr-white footer3__links__container">

                <div className="col-lg-4 col-md-4 col-sm-12 footer3__aboutLinks__container">
                    <div className="footer3__home__imageProfile"></div>
                    <h3 className="footer3__links__head">Links</h3>
                    <div className="footer3__links">

                        <div>
                            <a className="footer3__links__nav" alt="" href="#">Home</a>
                            <a className="footer3__links__nav" alt="" href="#">Contact</a>
                            <a className="footer3__links__nav" alt="" href="#">Skills</a>
                        </div>

                        <div>
                            <a className="footer3__links__nav" alt="" href="#">About</a>
                            <a className="footer3__links__nav" alt="" href="#">Blog</a>
                            <a className="footer3__links__nav" alt="" href="#">Projects</a>
                        </div>

                    </div>
                </div>

                <div className="col-lg-4 col-md-8 col-sm-12 footer3__about__container">
                    <h3 className="footer3__links__head">About Sven</h3>
                    <div>Here is some info about Sven.  A hard working and determined developer
                    he never gives up on an issue.  Patient and easy going he is a joy to work with.
                    Contact Sven today so you can get your project finished fast.
                    </div>
                </div>

                <div className="col-lg-4 col-md-12  col-sm-12 footer3__contact__container">
                    <h3 className="footer3__links__head">Contact</h3>
                    <form target="_blank" action="https://formsubmit.co/tommy_kelly@icloud.com" method="POST" className=""  >
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

            <div className="footer-lower footer3__logo__container">

                <div className="media-container-row">

                    <div className="col-sm-12">
                        <hr></hr>
                    </div>
                </div>

                <div className="media-container-row mbr-white d-flex justify-content-between">

                    <div className="col-md-6 copyright footer3__logolinks__container">
                        <p className="mbr-text mbr-fonts-style  display-7 footer3__copyright">© Copyright 2020</p>
                    </div>

                    <div className="col-md-6 footer3__icons">
                        <div className="social-list d-flex justify-content-end">
                            <a href="https://github.com/Sven-27/react-portfolio-group" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                            <a href="https://www.linkedin.com/in/sven-notermans" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                            <a href="https://www.facebook.com/Svengebon" target="_blank" rel="noreferrer"><FacebookIcon /></a>
                            <a href="https://www.instagram.com/svennie_27/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                            <a href="https://twitter.com/Sven__27" target="_blank" rel="noreferrer"><TwitterIcon /></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Footer3