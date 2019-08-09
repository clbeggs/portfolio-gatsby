
import React from "react"
import styled from "styled-components"
import { FaServer, FaDesktop, FaHeadphones, FaDivide, FaNetworkWired, FaRegFileCode } from 'react-icons/fa';
import { IconContext } from "react-icons";
import "./skills.css"
import accentTop from "../../../images/accent.svg"
import laptop from "../../../images/laptop.svg"

const SkillsBody = styled.div`
    width:100vw;
    font-family:Lora;
    margin-bottom:150px;
    padding-bottom:30px;
`


const Title = styled.div`
    font-size:4em;
    color:#86A0D3;
    margin-left:80px;
    margin-top:50px;
`
const SectionTitle = styled.div`
    font-size:2.3em;
    color:#86A0D3;
    font-weight:bold;
    dispay:table;
`

const SkillSection = styled.div`
    display:table;
    float: left;
    padding: 0 30px 60px 30px;
`   

const Writeup = styled.div`
    font-size:1.6em;
    color:white;
    width:430px;
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
    dispay:table;
`

const Skills = (props) => (

    <div style={{paddingBottom:"40px"}}>
        <SkillsBody>
            <Title>Skills</Title>

            <FirstRow className="parent">
                <Container>
                    <SkillSection>

                        
                        <SectionTitle>
                            <IconContext.Provider value={{className:'inline-react-icons_c1_r1 icon',size:".9em"}}>
                                <FaDesktop/> 
                            </IconContext.Provider>
                            
                            Front End
                            
                        </SectionTitle>

                        <Writeup>
                        I develop UI/UX with JavaScript, 
                        JQuery, HTML/CSS, React.js, and 
                        Gatsby.js. This website is built using  
                        Gatsby.js!

                        </Writeup>
                    </SkillSection>
                    <SkillSection>
                        <SectionTitle>
                            <IconContext.Provider value={{className:'inline-react-icons_c2_r1 icon', color: "#86A0D3",size:".9em"}}>
                                <FaServer/> 
                            </IconContext.Provider>

                                Back End
                            </SectionTitle>
                        <Writeup>
                        Experience with Back Ends using  
                        Postgres SQL 
                        </Writeup>
                    </SkillSection>

                    <SkillSection>
                        <SectionTitle>
                            
                        <IconContext.Provider value={{className:'inline-react-icons_c3_r1 icon', color: "#86A0D3",size:".9em"}}>
                            <FaHeadphones/> 
                        </IconContext.Provider>

                            UI/UX Design</SectionTitle>
                        <Writeup>
                        I work with Adobe XD to create 
                         a blueprint of my websites
                         to make the transition from
                         design to creating as seemless
                        as possible.
                        </Writeup>
                    </SkillSection>
                </Container>
                <Laptop>
                    <img className="laptop" src={laptop} alt="haha"/>
                </Laptop>
            </FirstRow>

            

            <SecondRow className="parent">
            <SecondRowAccent>
                <img className="secondRowAccent" src={accentTop} alt="haha"/>
            </SecondRowAccent>
                <Container>
                    <SkillSection>
                        <SectionTitle>
                            
                        <IconContext.Provider value={{className:'inline-react-icons_c1_r2 icon', color: "#86A0D3",size:".9em"}}>
                            <FaNetworkWired/> 
                        </IconContext.Provider>

                            Clustering</SectionTitle>
                        <Writeup>
                            Experience deploying cluster 
                            using Ansible, Kuberentes, and 
                            Vagrant. To see more about this, 
                            check out my Raspberry Pi Cluster 
                            Project below!
                        </Writeup>
                    </SkillSection>
                    <SkillSection>
                        <SectionTitle>
                            
                            <IconContext.Provider value={{className:'inline-react-icons_c2_r2 icon', color: "#86A0D3",size:".9em"}}>
                                <FaRegFileCode/> 
                            </IconContext.Provider>
                            
                            Other Skills</SectionTitle>
                        <Writeup>
                            Python, C++, C, Git, and LateX
                        </Writeup>
                    </SkillSection>
                    <SkillSection>
                        <SectionTitle>
                            
                            <IconContext.Provider value={{className:'inline-react-icons_c3_r2 icon', color: "#86A0D3",size:".9em"}}>
                                <FaDivide/> 
                            </IconContext.Provider>
                            
                            Mathematics</SectionTitle>
                        <Writeup>
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
    </div>
)


export default Skills
