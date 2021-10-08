import React from "react";
import { Link, useHistory } from 'react-router-dom';
import logo from '../images/ILOVECHARITY_logo.png';

function Header() {

	const history = useHistory();

	const makeDonation =() => {
		history.push('/donate');
	}

	return (
		<header class="header">
			<img
				src={logo}
				alt="I LOVE CHARITY logo"
				class="header__logo_text"
			/>
			<nav class="header__nav">
				<ul class="header__nav-links">
					<li class="section__link_plain">
						Get
						help
					</li>
					<li class="section__link_pink">
						<Link to='/donate'
						onClick={makeDonation}>
						Donate
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
