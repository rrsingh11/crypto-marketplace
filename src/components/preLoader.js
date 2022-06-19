import React from 'react';
import './preLoader.css';
import preloader from '../assets/preloader.gif';
const PreLoader = () => {
    return (
        <div>
            <div className="preloader">
                <img src={preloader} alt="preloader" />
            </div>
        </div>
    )
}
export default PreLoader