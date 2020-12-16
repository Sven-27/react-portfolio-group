import React from 'react'
import './Footer2.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer2() {


    return (
        <div className="footer2">

            <div className="back__totop">
                {/* <a href='#top'><h4>Back to Top</h4></a> */}
            </div>

            <div className="footer2__links__container">

                <div className="footer2_mediaIcons__container">
                    <div className="footer2__icons">
                        <a href="https://github.com/Sven-27/react-portfolio-group" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                        <a href="https://www.linkedin.com/in/sven-notermans" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                        <a href="https://www.facebook.com/Svengebon" target="_blank" rel="noreferrer"><FacebookIcon /></a>
                        <a href="https://www.instagram.com/svennie_27/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                        <a href="https://twitter.com/Sven__27" target="_blank" rel="noreferrer"><TwitterIcon /></a>
                    </div>
                </div>

                <div className="footer2_links__container">
                    <h4 className="footer2__links__head">I Would Love to go to Work for You:</h4>
                </div>

                <div className="footer2_links__button_container">
                    <div className="footer2_buttons">
                        <button className="btn btn-lg btn-dark btn-block" onClick={event => window.location.href = '/projects'} >Checkout Some of My Projects</button>
                    </div>

                    <div className="footer2_buttons">
                        <button className="btn btn-lg btn-dark btn-block" onClick={event => window.location.href = '/contact'}>Contact Me About Your Project!</button>
                    </div>
                </div>

                <div className="footer2_links__container">
                    <h3 className="footer2__links__head">Sven Notermans</h3>
                </div>

                <div className="footer2_copyright__container">
                    <h4 className="footer2__copyright__head">© Copyright 2020</h4>
                </div>

            </div >

        </div >
    )
}

export default Footer2