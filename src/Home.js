import React from 'react'
import './Home.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
// import Typing from './Typing';

function Home() {
    return (
        <div className="home">
            <div className="home__content">
                <div className="home__imageProfile"></div>
                <h1>We are <span>Team PFP</span></h1>
                <p>A family of passionate programmers who love to take on your challenges.</p>
                <div className="home__icons">
                    <a href="https://github.com/Sven-27/react-portfolio-group" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/sven-notermans" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                    <a href="https://www.facebook.com/Svengebon" target="_blank" rel="noreferrer"><FacebookIcon /></a>
                    <a href="https://www.instagram.com/svennie_27/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                    <a href="https://twitter.com/Sven__27" target="_blank" rel="noreferrer"><TwitterIcon /></a>
                </div>
                {/* <div className="home__type">
                <Typing className="type" />
        	</div> */}
            </div>
        </div>
    )
}

export default Home
