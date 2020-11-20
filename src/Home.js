import React from 'react'
import './Home.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

function Home() {
    return (
        <div className="home">
          <div className="home__content">
              <div className="home__imageProfile"></div>
            <img src="https://cdn.eso.org/images/thumb700x/airglow_ats_beletsky-CC.jpg" alt=""/>
            <h1>I am <span>Sven Notermans</span></h1>
            <p>I am a pasionate programmer who loves to take on challenges.</p>
            <div className="home__icons">
                <a href="https://github.com/Sven-27/react-portfolio-group" target="_blank"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/sven-notermans/" target="_blank"><LinkedInIcon /></a>
                <a href="https://www.facebook.com/Svengebon" target="_blank"><FacebookIcon /></a>
                <a href="https://www.instagram.com/svennie_27/" target="_blank"><InstagramIcon /></a>
                <a href="https://twitter.com/Sven__27" target="_blank"><TwitterIcon /></a>
            </div>
            </div>
        </div>
    )
}

export default Home
