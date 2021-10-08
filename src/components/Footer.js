import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<ul className="footer__nav">
				<li className="footer__nav-links"><img src="/images/ILOVECHARITY_white.png" alt="ILOVECHARITY"></li>
				<li className="footer__nav-links"> Privacy Policy </li>
				<li className="footer__nav-links"> Terms and Conditions </li>
				<li className="footer__nav-links"> FAQ </li>
				<li className="footer__nav-links">Donate</li>
				<li>
				<div className="footer__nav-links_icons">
						<a href="https://www.facebook.com"><img alt="facebook" src="/images/facebook.png">
						<a href="https://www.instagram.com"><img alt="instagram" src="/images/instagram.png">
						<a href="https://www.twitter.com"></a><img alt="twitter" src="/images/twitter.png">
						</div>
				</li>
  			</ul>
		</footer>
	);
}

export default Footer;
