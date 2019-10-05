import "./skills.css"
import React from "react"
import styled from "styled-components"
import { FaServer, FaDesktop, FaHeadphones, FaDivide, FaNetworkWired, FaRegFileCode } from 'react-icons/fa';
import { IconContext } from "react-icons";

import accentTop from "../../../images/accent.svg"
import laptop from "../../../images/laptop.svg"

const SkillsBody = styled.div`
    width:100vw;
    font-family:Lora;
    margin-bottom:150px;
    padding-bottom:30px;
`


const Title = styled.div`
    font-size:3.5vw;
    color:#86A0D3;
    margin-left:80px;
    margin-top:50px;
    @media (max-width: 900px) {
        font-size:7vw;
    }
    @media (max-width: 800px) {
        font-size:4em;
    }
`
const SectionTitle = styled.div`
    font-size:2.3vw;
    color:#86A0D3;
    font-weight:bold;
    dispay:table;
    @media (max-width: 900px) {
        font-size:5vw;
    }
    @media (max-width: 800px) {
        font-size:2em;
    }
    
`

const SkillSection = styled.div`
    display:table;
    float: left;
    padding: 0 30px 60px 30px;
`   

const Writeup = styled.div`
    font-size:1.6vw;
    color:white;
    width:24vw;
    @media (max-width: 900px) {
        width:70vw;
        font-size:3.5vw;
    }
    @media (max-width: 800px) {
        font-size:1.2em;
    }
`
const FirstRow = styled.div`
    width: 100%;
    margin-top:70px;
    padding-bottom:100px;
`

const SecondRow = styled.div`
    background-color:#5A5A5A;
    padding-top:30px;
`
const Container = styled.div`

    display: table;
    margin-left:30px;
`

const SecondRowAccent = styled.div`
    display:table;
    
`

const Laptop = styled.div`
    display:table;
    @media (max-width: 900px) {
        display:none;
    }
`
const Whitespace = styled.div`
    border: 1px solid red;
`
const SkillsMainBody = styled.div`
    @media (max-width: 900px){
        margin-top:-5%;
    }
`

const Skills = (props) => (

    <SkillsMainBody className="skill-body skill-parent">
        <SkillsBody>
            <Title className="skills-main-title">Skills</Title>

            <FirstRow className="parent first-row">
                <Container>
                    <SkillSection className="skill-section-ws">

                        
                        <SectionTitle className="section-title" >
                            <IconContext.Provider value={{className:'inline-react-icons_c1_r1 icon',color:"#86A0D3", size:".9em"}}>
                                <FaDesktop/> 
                            </IconContext.Provider>
                            
                            Front End
                            
                        </SectionTitle>

                        <Writeup className="writeup">
                        I develop UI/UX with JavaScript, 
                        JQuery, HTML/CSS, React.js, and 
                        Gatsby.js. This website is built using  
                        Gatsby.js!
                        
                        </Writeup>
                    </SkillSection>
                    <SkillSection className="skill-section-ws">
                        <SectionTitle className="section-title">
                            <IconContext.Provider value={{className:'inline-react-icons_c2_r1 icon', color: "#86A0D3",size:".9em"}}>
                                <FaServer/> 
                            </IconContext.Provider>

                                Back End
                            </SectionTitle>
                        <Writeup className="writeup">
                        Experience with Back Ends using  
                        Postgres SQL 
                        
                        </Writeup>
                    </SkillSection>

                    <SkillSection className="skill-section-ws">
                        <SectionTitle className="section-title">
                            
                        <IconContext.Provider value={{className:'inline-react-icons_c3_r1 icon', color: "#86A0D3",size:".9em"}}>
                            <FaHeadphones/> 
                        </IconContext.Provider>

                            UI/UX Design</SectionTitle>
                        <Writeup className="writeup">
                        I work with Adobe XD to create 
                         a blueprint of my websites
                         to make the transition from
                         design to creating as seemless
                        as possible.
                        
                        </Writeup>
                    </SkillSection>
                </Container>
                <Laptop>
                    <img style={{width:"20vw",right:"2vw", bottom:"-3vh"}} className="laptop" src={laptop} alt="haha"/>
                </Laptop>
            </FirstRow>

            

            <SecondRow className="parent">

            <SecondRowAccent>
                <img className="secondRowAccent" src={accentTop} alt="haha"/>
            </SecondRowAccent>


                <Container>
                    <SkillSection className="skill-section-ws">
                        <SectionTitle className="section-title">
                            
                        <IconContext.Provider value={{className:'inline-react-icons_c1_r2 icon', color: "#86A0D3",size:".9em"}}>
                            <FaNetworkWired/> 
                        </IconContext.Provider>

                            Clustering</SectionTitle>
                        <Writeup className="writeup">
                            Experience deploying cluster 
                            using Ansible, Kuberentes, and 
                            Docker. To see more about this, 
                            check out my Raspberry Pi Cluster 
                            Project below!
                            
                        </Writeup>
                    </SkillSection>
                    <SkillSection className="skill-section-ws">
                        <SectionTitle className="section-title">
                            
                            <IconContext.Provider value={{className:'inline-react-icons_c2_r2 icon', color: "#86A0D3",size:".9em"}}>
                                <FaRegFileCode/> 
                            </IconContext.Provider>
                            
                            Other Skills</SectionTitle>
                        <Writeup className="writeup">
                            Python, C++, C, Git, and LateX
                            
                        </Writeup>
                    </SkillSection>
                    <SkillSection className="skill-section-ws">
                        <SectionTitle className="section-title">
                            
                            <IconContext.Provider value={{className:'inline-react-icons_c3_r2 icon', color: "#86A0D3",size:".9em"}}>
                                <FaDivide/> 
                            </IconContext.Provider>
                            
                            Mathematics</SectionTitle>
                        <Writeup className="writeup">
                            I am getting a degree in Pure 
                            Mathematics, so I have the advantage 
                            of learning about some of the theories 
                            and applications of Computer Science at a 
                            theoretical level.
                            
                        </Writeup>
                    </SkillSection>
                </Container>
            </SecondRow>

        </SkillsBody>
    </SkillsMainBody>
)


export default Skills
