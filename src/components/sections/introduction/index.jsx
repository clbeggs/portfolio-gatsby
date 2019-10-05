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
    @media (max-width:800px){
        width:100%;
    }
`

const MyName = styled.h1`
    font-size:4vw;
    margin-top:9vh;
    @media (max-width:800px){
        font-size:3em;
        margin-top:1vh;
    }
`

const SnippetMe = styled.p`
    font-size:3vw;
    margin-top: 9vh;
    @media (max-width:800px){
        font-size:2em;
        margin-top:0vh;
    }
`
const Difference = styled.p`
    font-size:2vw;
    margin-top:9vh;
    @media (max-width:800px){
        font-size:1em;
        margin-top:2vh;
    }
`
const OpaqueBackground = styled.div`
    background-color:rgb(27,27,27,.7);  
    display:table;
    @media (max-width:800px){
        width:100%;
    }
`

const FontContainer = styled.div`
    text-align:center;   
    padding-right:3vw;
    padding-left:3vw;
`


const Introduction = (props,className) => (
    
   <Font className="parent intro-div">
       <OpaqueBackground>
        <FontContainer>
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
        </FontContainer>
       </OpaqueBackground>
   </Font>
  
)


export default Introduction


