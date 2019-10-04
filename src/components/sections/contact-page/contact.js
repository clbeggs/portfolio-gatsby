import "./styles.css"
import React from "react"
import styled from "styled-components"

import footerAccent from "../../../images/footer.svg"
import chat from "../../../images/chatting.svg"




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
    position:absolute;
    display:table;
    bottom:-10px;
`

const Coffee = styled.div`
    display:table;
    position:absolute;
    margin-left:1300px;
    bottom:-10px;
    right:50px;
    z-index:10;
`

const PersonalEmail = styled.div`
    color:white;
    font-size:1.4em;
`



function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  
  export default class Index extends React.Component {
    constructor(props) {
      super(props)
      this.state = { isValidated: false }
    }
  
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }
  
handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }



  render() {
      return(
<div className="parent contact-parent" >

<Title>Let's get in touch.</Title>

<Form>
    <form name="ContactPagePortfolio" method="POST" data-netlify="true"  action="/success/success" onSubmit={this.handleSubmit} >
        <Label>
            <label>

                <input type="text" name="nameSubmit" id="nameSubit" placeholder="Name.." onChange={this.handleChange} />
                <br/>
            </label>
        </Label>

        <Label>
            <label>

               <input type="email" name="email" id="email" placeholder="Email.." onChange={this.handleChange} />
               <br/>
            </label>
        </Label>

        <Label>
            <label>

               <textarea name="message" id="message" rows="5" placeholder="Message..." onChange={this.handleChange} />
               <br/>
            </label>
        </Label>
        
        <button type="submit">Send</button>
    </form>
</Form>

<Coffee>
    <img className="coffee_time" src={chat} alt="haha"/>
</Coffee>

<Footer> 
    <img className="footer-svg" src={footerAccent} alt="haha"/>
</Footer>

<PersonalEmail className="pers-email">
    Or just send me an email at beggs240@gmail.com!
</PersonalEmail>


</div>
  
      )
  }

}