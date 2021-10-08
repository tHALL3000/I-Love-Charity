import React from "react";

function Header() {

	// include function for Donate link
	
	return (
		<header class="header">
			<img
				src="src/images/ILOVECHARITY_logo.png"
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
						Donate
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
