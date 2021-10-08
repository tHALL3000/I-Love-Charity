import React from "react";
import heart from '../images/Vectorfilled-heart-white.png';

function Hero() {

	return (
		<div className="hero">
			<h1>
				ILOVECHARITY
			</h1>
			<div
				className="hero__container"
			>
				<h3>
					Helping
					the
					needy
					under
					<span style={{ border: "2px white solid; border-radius: 25px; padding: 8px" }}>
						any
						circumstances
					</span>
					<img src={heart} alt='' />
					Good
					does
					not
					go
					into
					quarantine.
				</h3>
			</div>
		</div>
	)
}

export default Hero;
