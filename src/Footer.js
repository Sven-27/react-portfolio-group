import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">

            <div className="back__totop">

                {/* <a href='#top'><h4>Back to Top</h4></a> */}

                

            </div>

            <div className="footer__links__container">

                <div className="links__container">
                    <h3 className="footer__links__head">Get to Know Team PFP</h3>

                    <div className="links_part1">
                        <div>
                            <a className="footer__links__nav" alt="" href="#">Sven</a>
                            <a className="footer__links__nav" alt="" href="#">Ayesha</a>
                            <a className="footer__links__nav" alt="" href="#">Rami</a>
                            <a className="footer__links__nav" alt="" href="#">Joe</a>
                        </div>
                        <div>
                            <a className="footer__links__nav" alt="" href="#">Tommy</a>
                            <a className="footer__links__nav" alt="" href="#">Punitha</a>
                            <a className="footer__links__nav" alt="" href="#">Don</a>
                            <a className="footer__links__nav" alt="" href="#">Niro</a>
                            <a className="footer__links__nav" alt="" href="#">AJ</a>
                        </div>

                    <div>
                        <a className="footer__links__nav" alt="" href="#">Sven</a>
                        <a className="footer__links__nav" alt="" href="#">Tommy</a>
                        <a className="footer__links__nav" alt="" href="#">Rami</a>
                        <a className="footer__links__nav" alt="" href="#">AJ</a>

                    </div>
                </div>

                <div className="links__container">
                    <h3 className="footer__links__head">Learn From Us</h3>
                    <a className="footer__links__nav" alt="" href="#">Consulting</a>
                    <a className="footer__links__nav" alt="" href="#">Coaching</a>
                    <a className="footer__links__nav" alt="" href="#">Freelance Projects</a>

                </div>

                <div className="links__container">
                    <h3 className="footer__links__head">Our Favorite Resources</h3>
                    <a className="footer__links__nav" alt="" href="#">VS Code</a>
                    <a className="footer__links__nav" alt="" href="#">ReactJS</a>
                    <a className="footer__links__nav" alt="" href="#">Font Awesome</a>
                    <a className="footer__links__nav" alt="" href="#">Bootstrap</a>
                </div>

                <div className="links__container">
                    <h3 className="footer__links__head">Let Us Help You</h3>
                    <a className="footer__links__nav" alt="" href="#">Contact Us</a>
                    <a className="footer__links__nav" alt="" href="#">Your Account</a>
                    <a className="footer__links__nav" alt="" href="#">Your Orders</a>
                    <a className="footer__links__nav" alt="" href="#">Rates & Policies</a>
                </div>

            </div>
        </div>
            <div className="footer__logo__container">
                <img className="footer__logo" alt="" src="./footer_logo.png" />
            </div>

        </div>
    )
}

export default Footer
