
import React from 'react';
import footer_logo from '../assets/footer_logo.png';
import './Footer.css'

const FooterComp = () => {
	return (
		<div>
		<div className="footer">
			<div className="footer_comp">
				<img src={footer_logo} alt="footer_logo"></img>
			</div>
			<div className="footer_comp">
				<p>About Us</p>
				<p>Contact Us</p>
				<p>Apply for Listing</p>
			</div>
			<div className="footer_comp">
				<p>User Agreement</p>
				<p>Privacy Policy</p>
				<p>Disclaimer</p>
			</div>
			<div className="footer_comp">
				<p>Fee Structure</p>
				<p>API Doc</p>
				<p>Notice</p>
			</div>
		</div>
		<div classname="hr"></div>
		<p className='copyright'>Copyright &copy; Bitbe 2022. All rights reserved</p>
		</div>
	)

}

export default FooterComp