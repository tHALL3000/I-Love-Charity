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
					<li className="section__link_pink"></li>
					<li className="section__link_plain"></li>
				</ul>
				<menu className="header__menu">
					<div></div>
					<div></div>
					<div></div>
				</menu>
				<a
					className="section__link_icon"
					href="#"
				>
					icon
				</a>
			</nav>
		</header>
	);
}

export default Header;
