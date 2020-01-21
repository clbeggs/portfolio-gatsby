import "./about.css"
import React from "react"
import styled from 'styled-components'

import desk_work from "../../../images/desk_work.svg"

const Title = styled.div`
    font-size:4em ;
    color:#86A0D3 ;
    margin-left:80px ;
    margin-top:50px ;
    @media (max-width: 500px){
        margin-left:10px;
    }
    
`
const ColoredContainer = styled.div`
    background-color:#5A5A5A ;
    color:white ;
    font-size:1.7em ;
    display:table ;
    margin-top:50px ;
    width:55%;
    @media (max-width:1280px){
        width:70vw;
    }
    @media (max-width: 900px){
        width:90vw;
    }
    @media (max-width: 800px){
        width:95vw;
        font-size:1.3em;
    }
    
    
`

const Strong = styled.div`
    color:#86A0D3 ;
    display:inline ;
    font-size:1em ;
    font-weight:bold ;
    
`
const Bio = styled.div`
    padding: 30px 40px 40px 10% ;    
    
`

const InterestContainer = styled.div`
    margin-top:60px ;
    
    
`
const ContainerTitle = styled.div`
    color:white ;
    font-size:2.3em ;
    margin-left:100px ;
    @media (max-width: 800px){
        margin-left:3vw;
    }
    
    
`

const InterestList = styled.div`
    font-size:1.7em ;
    color:white ;
    display:table ;
    margin-left:20vw;
    margin-top:40px ;
    width:50% ;
    
    @media (max-width:1280px){
        width:70vw;
        padding-right:12vw;
    }
    @media (max-width: 900px){
        width:70vw;
    }
    @media (max-width: 800px){
        width:85vw;
        font-size: 1.6em;
        margin-left:5vw;
    }
    
`
const SVG = styled.div`
    display:table ;
    position:absolute ;
    margin-left:1300px ;
    top:10px ;
    right:-10px ;

    @media (max-width:1285px){
        margin-left:-300px;
        width:400px;
    }
    @media (max-width: 900px){
        display:none;
    }
    
`
const AboutBody = styled.div`
    padding-bottom:5%;
    display:table;
`

const AboutMe = (props) => (

<AboutBody style={{paddingBottom:"5%"}}className="parent about-me-parent" > 
    <Title className="about-me-title" >About Me</Title>
    <ColoredContainer className="colored-container">
        <Bio className="bio">
        Hello! My name is <Strong>Chris</Strong>, I am a <Strong>student</Strong> at the University 
        of <br/> Colorado Boulder, studying <Strong>Mathematics</Strong> and <Strong>Computer Science</Strong>.
        <br/><br/>
        When I'm not busy with my class work, or work, or testing out 
        the human limits of caffiene consumption, I enjoy traveling to National Parks, 
        messing around with microcontrollers, and <Strong>creating</Strong> tanglible
        projects on my computer.
        </Bio>
    </ColoredContainer>

    <InterestContainer className="interest-container">
        <ContainerTitle className="container-title" >Things I'm currently interested in.</ContainerTitle>
    </InterestContainer>

    <InterestList className="interest-list-container">
        <Strong>Differential Geometry</Strong>: While I'm a ways away from learning about this in the 
        classroom, my professor  did get me very excited about some of the most <Strong>beautiful</Strong>
         &nbsp;mathematics I've ever seen.

        <br/><br/>
        <Strong>Deep Learning</Strong>: I think every CS student has a fascination with the subject,
        and reading more about applicable technolgies today only excites me more!
    </InterestList>
    <SVG><img style={{width:"40vw", marginTop:"5vh"}} className="desk_work" src={desk_work} alt="haha"/></SVG>
</AboutBody>


  
)

export default AboutMe
