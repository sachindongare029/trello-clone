import React from 'react';

function Footer() {
	return (
		<footer id="footer">
			<div className="row">
				<div className="col-sm-6">
					Copyright Sachin Dongare
				</div>
				<div className="col-sm-6">
					{(new Date()).getFullYear()}
				</div>
			</div>
		</footer>
	);

}


export default Footer;