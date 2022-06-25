import React from 'react';
import './dropdown.css';
import qr_image from '../assets/download_qr_code.png';


const Dropdown = () =>{
    return(
    <div className="dropdown">
        <div className="qr">
        <img src={qr_image} alt="qr_code" className="qr_code"/>
        <caption className='caption'>Download using QR code</caption>
        </div>
        <div className="dropdown-content">
            <a href="android.com">Android</a>
            <a href="apple.com"> IOS</a>
        </div>
    </div>
    )
}

export default Dropdown;

