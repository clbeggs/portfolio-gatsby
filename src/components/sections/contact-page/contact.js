import React from "react"
import styled from "styled-components"
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
`

const Label = styled.div`
    margin-top:30px;
    margin-bottom:30px;
`

const ContactPage = (props) => (
    <div style={{marginTop:"150px",fontFamily:"Lora"}}>

        <Title>Let's get in touch.</Title>

        <Form>
            <form method="post" action="https://formspree.io/beggs240@gmail.com">
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


    </div>

)
export default ContactPage