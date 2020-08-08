import React from 'react'
import Ripple from '../Ripple.svg';
import '../App.scss';
import {useHistory} from 'react-router-dom'

export default function Home() {
    const history = useHistory()


    const handleClick = () => {
        history.push('/Coral-Fussman-profile/projects')
    }
    return (
        <div className="main">
            <img src={Ripple} alt="ripple" className="ripple" height="50px" /> 
            <div >
            <br/>
            <br/>
                <div onClick={handleClick} className="request-loader">
                    <span > MY WAVES </span>
                </div>
            </div>
        </div>
    )
}
