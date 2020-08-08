import React from 'react'

import Linkedin from '../Linkedin.svg';
import Github from '../Github.svg';
import Medium from '../Medium.svg';
import {Row, Form, ContactMe, Label, Input, InputMessage, InputSubmit, EmailAdd} from './Styles';

import emailjs from 'emailjs-com';



function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'my_email_service', e.target, 'user_xx0QNILgi7vUGs2yjhc5C')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }



    return (
        <div>
            <form onSubmit={sendEmail}>
            <ContactMe> Like what you see? <br/> Contact Me </ContactMe>
                <Label htmlFor="label">Name:</Label>
                <Input type="text" id="label" />
                
                <Label htmlFor="label">Email:</Label>
                <Input type="text" id="label" />

                <Label htmlFor="label">Message:</Label>
                <InputMessage type="text" id="label" name="message" />

                <InputSubmit id="label" type="submit" value="Send"/>
                <EmailAdd> ↪   or email me at coralfussman@gmail.com, look forward to the possibilities   ↩ </EmailAdd>
            </form>
            <Row>

                <div className="socialBttn"><img src={Linkedin} className="App-logo" alt="logo" /> </div>
                <div className="socialBttn"><img src={Github} className="App-logo" alt="logo" /> </div>
                <div className="socialBttn"><img src={Medium} className="App-logo" alt="logo" /> </div>

            </Row>

        </div>
    )
}

export default Contact
