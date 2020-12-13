
import React, {Redirect} from "react";

import React from 'react'

import './About.css'

function About() {
	return (
		<div className="about">
			<div className="about__container">
				<div className="about__img__container">
			<div className="about__image"></div>
			</div>
			<div className="about__content">
				<div className="about__me">
					<h1>
						<span>About me </span>
					</h1>
					<p>
						<b>Front end developer, leergierig.</b>
						<br />
						Met veel plezier heb ik een sterk fundament gelegd om als front end
						developer van toegevoegde waarde te zijn in het bedrijfsleven, en
						kijk ik ernaar uit om mij verder te ontwikkelen tot full stack
						developer.
					</p>
				</div>
				<div className="about__info">
					<div className="about__address">
						<h4>Contact details</h4>
						<span>
							Rami David
							<br />
							HollandIsOkStreat 100
							<br />
							Amsterdam NordHolland, 1023 XL
							<br />
							+31-6-12 345 678
							<br />
							ramidavid@hollandisok.nl
						</span>
					</div>
					<div className="about__resume">
						<a
							href="https://drive.google.com/file/d/1BRtiFexIMVM8-IjfaSO69DfI2LIk424y/view?usp=sharing"
							target="_blank"
							rel="noreferrer"
							className="about__botton"
							class="btn btn-yellow btn-animate"
							role="button"
							aria-pressed="true"
							download
						>
							<i className="fa fa-download"></i> Download Resume
						</a> 
					</div>
				</div>
			</div>
			</div>
		</div>
	);

}

export default About;

