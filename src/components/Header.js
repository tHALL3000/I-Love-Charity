import React from "react";

function Header() {
	return (
		<header className="header">
			<img
				src="src/images/ILOVECHARITY_logo.png"
				alt="I LOVE CHARITY logo"
				className="header__logo_text"
			/>
			<nav className="header__nav">
				<ul className="header__nav-links">
					<li className="section__link_plain"></li>
					<li></li>
					<li className="section__link_plain"></li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
