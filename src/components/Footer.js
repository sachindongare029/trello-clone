import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<footer id="footer">
			<div className="row">
					<h1>Copyright Trello </h1>
					<h2>{(new Date()).getFullYear()}</h2>
			</div>
		</footer>
	);
}
export default Footer;