import "./about.css"
import React from "react"
import styled from 'styled-components'

import desk_work from "../../../images/desk_work.svg"

const Title = styled.div`
    font-size:4em ;
    color:#86A0D3 ;
    margin-left:80px ;
    margin-top:50px ;
    
    
`
const ColoredContainer = styled.div`
    background-color:#5A5A5A ;
    color:white ;
    font-size:1.7em ;
    display:table ;
    margin-top:50px ;
    width:55% ;
    
    
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
    
    
`

const InterestList = styled.div`
    font-size:1.7em ;
    color:white ;
    display:table ;
    margin-left:150px ;
    margin-top:40px ;
    width:50% ;
    
`
const SVG = styled.div`
    display:table ;
    position:absolute ;
    margin-left:1300px ;
    top:10px ;
    right:-10px ;
`


const AboutMe = (props) => (

<div className="parent about-me-parent" > 
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
    <SVG><img className="desk_work" src={desk_work} alt="haha"/></SVG>
</div>


  
)

export default AboutMe
