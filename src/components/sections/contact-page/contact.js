import "./styles.css"
import React from "react"
import styled from "styled-components"
import chat from "../../../images/chatting.svg"




const Title = styled.div`
    font-size:4em;
    color:#86A0D3;
    margin-left:80px;
    margin-top:50px;
    @media (max-width: 500px){
        margin-left:10px;
    }
    
`
const Form = styled.div`
    display:table;
    margin-left:15vw;
    margin-top:100px;

    @media (max-width: 900px) {
        input {
            width: 70vw;
        }
        textarea {
            width: 70vw;
        }
    }

    @media (max-width: 800px) {
        margin-left:3vw;
        input {
            width: 90vw;
        }
        textarea {
            width: 90vw;
        }
    }
`

const Label = styled.div`
    margin-top:30px;
    margin-bottom:30px;
`
const Footer = styled.div`  
    position:absolute;
    display:table;
    bottom:-10px;
`

const Coffee = styled.div`
    display:table;
    position:absolute;
    margin-left:1300px;
    bottom:-10px;
    right:5vw;
    z-index:10;
    @media (max-width: 900px){
        right:0vw;
    }
    @media (max-width: 700px){
        display:none;
    }
`

const PersonalEmail = styled.div`
    color:white;
    font-size:1.4em;
    margin-left:5vw;
    margin-top:5vh;
`


const Contact = (props) => (

<div className="parent contact-parent" >

<Title>Let's get in touch.</Title>

<Form>
    <form name="ContactPagePortfolio" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" >
    <input type="hidden" name="bot-field" />
    <input type="hidden" name="form-name" value="contact" />

        <Label>
            <label>

                <input type="text" name="nameSubmit" id="nameSubit" placeholder="Name.." />
                <br/>
            </label>
        </Label>

        <Label>
            <label>

               <input type="email" name="email" id="email" placeholder="Email.." />
               <br/>
            </label>
        </Label>

        <Label>
            <label>

               <textarea name="message" id="message" rows="5" placeholder="Message..." />
               <br/>
            </label>
        </Label>
        
        <button type="submit">Send</button>
    </form>
</Form>

<Coffee>
    <img style={{display:"table",width:"30vw"}} className="coffee_time" src={chat} alt="haha"/>
</Coffee>


<PersonalEmail className="pers-email">
    Or just send me an email at beggs240@gmail.com!
</PersonalEmail>


</div>

)
export default Contact