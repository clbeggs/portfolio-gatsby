import "./styles.css"

import React from "react"
import styled from 'styled-components'
import StyledCluster from "../../background/cluster"
import StyledDesktopCode from "../../background/code"
import StyledStudents from "../../background/students"

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
    @media (max-width: 1000px) {
        grid-template-columns:100%;
    }
`

const GridItem = styled.div`
    width: 400px;
    height: 400px;
    @media (max-width: 1000px) {
        width:60vw;
        margin-left:5vw;
    }
    @media (max-width: 800px) {
        width:90vw;
        margin-left:5vw;
    }
`

const FilterImg = styled.div`
    background-color: #86A0D3;
    opacity:.92;
    width:100%;
    height:105%;

    @media (max-width: 900px){
        opacity:1;
    }

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
    @media ( max-width:900px ){
        padding: 0 20px 0 20px;
    }
`

const Icon = styled.div`
 margin-top:45px;
`


const Title = styled.div`
    font-size:4em;
    color:#86A0D3;
    margin-left:80px;
    margin-top:-200px;
    @media (max-width: 500px){
        margin-left:10px;
    }
    
`

const MiddleAccent = styled.div`
    width:90%;
    background-color:#5A5A5A;
    display:table;
`
const ClusterPic = styled(StyledCluster)`
    
`
const StudentPic = styled(StyledStudents)`
    
`
const DesktopPic = styled(StyledDesktopCode)`
    
`


const ProjectPage = (props) => (
    <div className="parent project-main-div">

        <Title className="title">
            Personal Projects
        </Title>

        <Container className="grid">
        <GridItem className="grid-item-proj">
                <ClusterPic>
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
                </ClusterPic>
        </GridItem>
        



        <GridItem className="grid-item-proj">
            <DesktopPic>
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
            </DesktopPic>
        </GridItem>

        <GridItem className="grid-item-proj">
            
                <FilterImg>
                    <ProjectText>
                        <CardTitle> <br/>
                            Gmail Reminder Extension    
                        </CardTitle>

                        <CardDescription className="card-descrip-proj" >
                            <br/>
                            This one is a small project. I sent out a bunch of emails
                            to potential employeers and didn't attach my resume.. And I ended
                            each one with "Attached below is my resume". So, I wrote a small
                            script that has a little popup asking if you attached the files you 
                            said you would when you are writing a new email.
                        </CardDescription>

                    </ProjectText>
                </FilterImg>
            
        </GridItem>




        <GridItem className="grid-item-proj">
            <StudentPic>
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
            </StudentPic>
        </GridItem>
    

    </Container>

    <MiddleAccent className="child"></MiddleAccent>
    </div>

)
export default ProjectPage