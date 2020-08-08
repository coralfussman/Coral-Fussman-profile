import React from 'react'
import Ripple from '../Ripple.svg';
import '../App.scss';

export default function Home() {
    return (
        <div className="main">
            <img src={Ripple} alt="ripple" className="ripple" height="50px" /> 
            <div >
            <br/>
            <br/>
                <div className="request-loader">
                    <span> MY WAVES </span>
                </div>
            </div>
        </div>
    )
}
