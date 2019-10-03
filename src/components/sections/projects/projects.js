import "./styles.css"

import React from "react"
import styled from 'styled-components'
import StyledCluster from "../../background/cluster"
import StyledDesktopCode from "../../background/code"
import StyledStudents from "../../background/students"
import StyledNeoPixel from "../../background/neopixel"
import Math from "../../../images/math.svg"


import MathBlue from "../../../images/math_blue.svg" //How You import svg!!

import { FaGithub } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Container = styled.div`
    color:white;
    font-family:Lora;
    margin-top: 80px;
    display:grid;
    grid-column-gap:100px;
    grid-row-gap:70px;
    grid-template-columns: 400px 400px;
    width:950px;
    margin-left:auto;
    margin-right:auto;
`

const GridItem = styled.div`
    width: 400px;
    height: 400px;
`

const FilterImg = styled.div`
    background-color: #86A0D3;
    opacity:.92;
    width:100%;
    height:105%;
`
const ProjectText = styled.div`
    text-align:center;
`

const CardTitle = styled.h3`
    margin-top:-10px;
    opacity:100;
    font-size:1.5em;
`

const CardDescription = styled.p`
    opacity:1;
    font-size:1.3em;
`

const Icon = styled.div`
 margin-top:45px;
`

const IconLink = styled.a`
    width:100%;
    height:100%;
`

const Title = styled.div`
    font-size:4em;
    color:#86A0D3;
    margin-left:80px;
    margin-top:-200px;

    @media only screen and (min-width:1600){
        text-align:right;
        color:red;
    }
`

const MiddleAccent = styled.div`
    width:90%;
    background-color:#5A5A5A;
    display:table;
`

const ProjectPage = (props) => (
    <div className="parent project-main-div">

        <Title className="title">
            Personal Projects
        </Title>

        <Container className="grid">
        <GridItem className="grid-item-proj">
                <StyledCluster>
                    <FilterImg>
                        <ProjectText>
                            <CardTitle ><br/>
                            Raspberry Pi Cluster
                            </CardTitle>
                            <CardDescription className="card-descrip-proj" ><br/>
                                I am in the process of building a 6 node Raspberry Pi based Kubernetes 
                                cluster, deployed using Ansible and Docker. Read more about it below in 
                                the projects section! 
                            </CardDescription>
                            <Icon>
                                <IconContext.Provider value={{ color: "white",size:"3em"}}>
                                    <a style={{width:"100%", height:"100%", outline:"none"}} className="skills-icon" href="https://github.com/clbeggs/ansibleCluster">
                                    <FaGithub/> 
                                    </a>
                                </IconContext.Provider>
                            </Icon>
                        </ProjectText>
                        
                    </FilterImg>
                </StyledCluster>
        </GridItem>
        



        <GridItem className="grid-item-proj">
            <StyledDesktopCode>
                <FilterImg>
                    <ProjectText>
                        <CardTitle>
                            <br/>
                            This Portfolio Website!
                        </CardTitle>
                        <CardDescription className="card-descrip-proj" >
                        <br/>
                            This website was created from scratch
                            with Gatsby.js. Before I decided I wanted
                            to create my own portfolio, I had no
                            experience with front end design.
                            my first iterations were made with JQuery
                            and HTML/CSS.
                        </CardDescription>
                        <IconContext.Provider value={{ color: "white",size:"3em"}}>
                            <a style={{width:"100%", height:"100%", outline:"none"}} className="skills-icon" href="https://github.com/clbeggs/portfolio-gatsby">
                                <FaGithub/> 
                            </a>
                        </IconContext.Provider>
                    </ProjectText>
                </FilterImg>
            </StyledDesktopCode>
        </GridItem>

        <GridItem className="grid-item-proj">
            <StyledStudents>
                <FilterImg>
                    <ProjectText>
                        <CardTitle> <br/>
                            More Coming!
                        </CardTitle>

                        <CardDescription className="card-descrip-proj" >
                            <br/>
                            As much as I would love to sink all
                            of my time into my projects, 
                            I am a full time student with a 
                            part time job, and those responsibilites come
                            first!
                        </CardDescription>

                    </ProjectText>
                </FilterImg>
            </StyledStudents>
        </GridItem>
    

    </Container>

    <MiddleAccent className="child"></MiddleAccent>
    </div>

)
export default ProjectPage