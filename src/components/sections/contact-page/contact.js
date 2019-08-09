import React from "react"
import styled from "styled-components"

import footerAccent from "../../../images/footer.svg"
import chat from "../../../images/chatting.svg"
import "./styles.css"



const Title = styled.div`
    font-size:4em;
    color:#86A0D3;
    margin-left:80px;
    margin-top:50px;
`
const Form = styled.div`
display:table;
margin-left:400px;
margin-top:100px;
`

const Label = styled.div`
    margin-top:30px;
    margin-bottom:30px;
`
const Footer = styled.div`
    position:relative;
    width:100%;
`

const Coffee = styled.div`
    display:table;
    position:absolute;
    margin-left:1300px;
    bottom:0px;
    right:50px;
`

const ContactPage = (props) => (
    <div className="parent" style={{ marginTop:"150px",fontFamily:"Lora",paddingBottom:"200px"}}>

        <Title>Let's get in touch.</Title>

        <Form>
            <form name="contact" method="post" data-netlify="true">
                <Label>
                    <label>

                        <input type="text" name="name" id="name" placeholder="Name.."/>
                        <br/>
                    </label>
                </Label>

                <Label>
                    <label>

                       <input type="email" name="email" id="email" placeholder="Email.."/>
                       <br/>
                    </label>
                </Label>

                <Label>
                    <label>

                       <textarea name="message" id="message" rows="5" placeholder="Message..."/>
                       <br/>
                    </label>
                </Label>
                
                <button type="submit">Send</button>
            </form>
        </Form>

        <Footer> 
            <img className="footer-svg" src={footerAccent} alt="haha"/>
        </Footer>

        <Coffee>
            <img className="coffee_time" src={chat} alt="haha"/>
        </Coffee>
    </div>

)
export default ContactPage