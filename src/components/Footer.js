import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<footer id="footer">
			<div className="row">
					<p>&copy; {(new Date()).getFullYear()} www.trello.com </p>
					<p>All rights reserved.</p>
			</div>
		</footer>
	);
}
export default Footer;