import React from 'react';
import * as ReactDOM from 'react-dom'
import './preLoader.css';
import preloader from '../src/assets/preloader.gif';
const PreLoader = () => {
    return (
        <>
            <div className="preloader">
                <img src={preloader} alt="preloader" />
            </div>
        </>
    )
}

const loader = document.querySelector('#spinner')
ReactDOM.render(<PreLoader/>,loader)