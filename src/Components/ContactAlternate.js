import React, {useState} from 'react'
import Submitted from './Submitted';
import Linkedin from '../Linkedin.svg';
import Github from '../Github.svg';
import Medium from '../Medium.svg';
import {Row, Form, ContactMe, Label, Input, InputMessage, InputSubmit, EmailAdd} from './Styles';
import {useHistory} from 'react-router-dom'


import emailjs from 'emailjs-com';

 

function Contact() {
    // const history = useHistory()

    const [submitted, setSubmitted] = useState(false)
   


    const submitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            this.setState({ status: "SUCCESS" });
          } else {
            this.setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }
       
    // function sendEmail(e) {
    //     e.preventDefault();
    
    //     emailjs.sendForm('gmail', 'my_email_service', e.target, 'user_xx0QNILgi7vUGs2yjhc5C')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });

         
    //   }

      
      const toggle = () => {
        setSubmitted(!submitted);
      }
      
      if(submitted === (false)){
        return (
            <div>
                <form action="https://formspree.io/xaypkyyq" method="POST"  onSubmit={submitForm}>
                <ContactMe> Like what you see? <br/> Contact Me </ContactMe>

                    <Label htmlFor="label">Name:</Label>
                    <Input type="text" id="label" name="_name" />
                    
                    <Label htmlFor="label">Email:</Label>
                    <Input type="email" id="label" name="_replyto" />

                    <Label htmlFor="label">Message:</Label>
                    <InputMessage type="text" id="label" name="_body" />

                    <InputSubmit id="label" type="submit" value="Send" onClick={toggle}/>
                    <EmailAdd> ↪  or email me at coralfussman@gmail.com, looking forward to the possibilities  ↩ </EmailAdd>
                </form>
                <Row>
                    <a href="https://www.linkedin.com/in/coral-fussman-21721538/" target="_blank" >
                        <img src={Linkedin} className="socialBttn" alt="linkedin" />
                    </a>

                    <a href="https://github.com/coralfussman" target="_blank">
                        <img src={Github} className="socialBttn" alt="Github"/>
                    </a>

                    <a href="https://medium.com/@coralfussman"  target="_blank">
                        <img src={Medium} className="socialBttn" alt="medium"  />
                    </a>
                 
                    
                   
                </Row>


            </div>
        )
    } else return (
         <div>
            <Submitted/>
            <Row>

                <a href="https://www.linkedin.com/in/coral-fussman-21721538/" >
                    <img src={Linkedin} className="socialBttn" alt="linkedin" />
                </a>

                <a href="https://github.com/coralfussman" >
                    <img src={Github} className="socialBttn" alt="Github" />
                </a>

                <a href="https://medium.com/@coralfussman" >
                    <img src={Medium} className="socialBttn" alt="medium" />
                </a>
                 
            </Row>
         
         </div>
         )
}

export default Contact
