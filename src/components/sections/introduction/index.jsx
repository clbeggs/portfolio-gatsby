import React from "react"
import styled from 'styled-components';
import "./intro.css"

const Font = styled.div`
    font-family:Lora;
    color:white;
    border-top:0.1px solid black;
    display:table;
    border: 1px solid red;
`

const MyName = styled.h1`
    font-size:5em;
    margin-left:200px;
    margin-top:100px;
    display:table;
    border: 1px solid red;
`



const SnippetMe = styled.p`
    font-size:3em;
    margin-left:140px;
    margin-top: 100px;
    display:table;
    text-align:center;
    border: 1px solid blue;
`
const Difference = styled.p`
    font-size:2em;
    display:table;
    margin-left:200px;
    margin-top:100px;
    border: 1px solid green;
`


const Introduction = (props,className) => (
    
   <Font>
       <MyName className="intro-name">
           Chris Beggs
       </MyName>
       <SnippetMe className="intro-snippet">
           Student and <br/>
           Future Software Engineer 
       </SnippetMe>
       <Difference className="intro-diff">
           Let's Make A Difference Together.
       </Difference>
       
   </Font>
  
)


export default Introduction


