import React from "react"
import styled from 'styled-components'




const Font = styled.div`
    font-family:Lora;
    color:white;
`

const MyName = styled.h1`
    font-size:5em;
    margin-left:200px;
    margin-top:200px;

`

//border: 5px solid red;

const SnippetMe = styled.p`
    font-size:3em;
    margin-left:140px;
    margin-top: 100px;
    display:table;
    text-align:center;
`
const Difference = styled.p`
    font-size:2em;
    display:table;
    margin-left:200px;
    margin-top:100px;
`


const Introduction = (props,className) => (
    
   <Font>
       <MyName>
           Chris Beggs
       </MyName>
       <SnippetMe>
           Student and <br/>
           Future Software Engineer 
       </SnippetMe>
       <Difference>
           Let's make a difference together.
       </Difference>
       
   </Font>
  
)


export default Introduction


