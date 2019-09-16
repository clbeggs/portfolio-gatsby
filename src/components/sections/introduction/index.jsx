import React from "react"
import styled from 'styled-components';
import "./intro.css"

const Font = styled.div`
    font-family:Lora;
    color:white;
    border-top:0.1px solid black;
    display:table;
    height:100%;
    z-index:100;
    
    
`

const MyName = styled.h1`
    font-size:5em;
    margin-left:200px;
    margin-top:100px;
    display:table;
`



const SnippetMe = styled.p`
    font-size:3em;
    margin-left:140px;
    margin-top: 100px;
    display:table;
    text-align:center;
    padding-right:20px;
`
const Difference = styled.p`
    font-size:2em;
    display:table;
    margin-left:200px;
    margin-top:100px;
    padding-bottom:20px;
`
const OpaqueBackground = styled.div`
    background-color:rgb(27,27,27,.7);     
`


const Introduction = (props,className) => (
    
   <Font className="parent intro-div">
       <OpaqueBackground>
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
       </OpaqueBackground>
   </Font>
  
)


export default Introduction


