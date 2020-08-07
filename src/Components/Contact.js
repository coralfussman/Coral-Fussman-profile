import React from 'react'

import Linkedin from '../Linkedin.svg';
import Github from '../Github.svg';
import Medium from '../Medium.svg';
import {Row, SocialBttn} from './Styles';


function Contact() {
    return (
        <div>
            <p>Contact info here and form</p>
            
            <Row>

                <div className="socialBttn"><img src={Linkedin} className="App-logo" alt="logo" /> </div>
                <div className="socialBttn"><img src={Github} className="App-logo" alt="logo" /> </div>
                <div className="socialBttn"><img src={Medium} className="App-logo" alt="logo" /> </div>

            </Row>

        </div>
    )
}

export default Contact
