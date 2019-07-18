import React from "react"
import styled from "styled-components"
import { FaServer, FaDesktop, FaHeadphones, FaDivide, FaNetworkWired, FaRegFileCode } from 'react-icons/fa';
import { IconContext } from "react-icons";
import "./skills.css"

const SkillsBody = styled.div`
    width:100vw;
    height:100vh;
    font-family:Lora;
`
const SectionTitle = styled.p`
    font-size: 1.8em;
    color:#86A0D3;
    margin-top:0px;
`
const Icon = styled.div`
    size:2em;
    border: solid 5px blue;
`
const Border = styled.div`
    border: solid 5px blue;
`
const Title = styled.div`
    font-size:4em;
    color:#86A0D3;
    margin-left:80px;
    margin-top:50px;
`

const Writeup = styled.p`
    color:white;
    font-size:1.2em;
    display:inline-block;
    margin-top:-20px;
    
`

const CenteredContainer = styled.div`
    margin:auto;
    display:table;
`



const Skills = (props) => (


    
    <SkillsBody>

        <Title>Skills</Title>        
        <CenteredContainer>
        <SectionTitle> 
            <IconContext.Provider value={{className:'inline-react-icons', color: "#86A0D3",size:".9em"}}>
                <FaDesktop/> 
            </IconContext.Provider>
            
                Front End

            <IconContext.Provider value={{className:'inline-react-icons2', color: "#86A0D3",size:".9em"}}>
                <FaServer/> 
            </IconContext.Provider>
            Back End
            
            <IconContext.Provider value={{className:'inline-react-icons2', color: "#86A0D3",size:".9em"}}>
                <FaHeadphones/> 
            </IconContext.Provider>
            UI/UX Design


        </SectionTitle>

        
            <Writeup style={{marginLeft:"35px",marginTop:"-20px"}}>
                I develop UI/UX with JavaScript, <br/>
                JQuery, HTML/CSS, React.js, and <br/>
                Gatsby.js. This website is built using <br/> 
                Gatsby.js!
                <br/>
                <br/>
            </Writeup>
    
            <Writeup style={{marginLeft:"140px", marginBottom:"100px"}}>
                Experience with Back Ends using <br/> 
                Postgres SQL 
                <br/>
                <br/>
                <br/>
                <br/>
            </Writeup>

            <Writeup style={{marginLeft:"170px", marginBottom:"100px"}}>
                I work with Adobe XD to create 
                <br/> a blueprint of my websites<br/>
                 to make the transition from<br/>
                 design to creating as seemless<br/>
                as possible.
            </Writeup>





            <SectionTitle>  
            <IconContext.Provider value={{className:'inline-react-icons', color: "#86A0D3",size:".9em"}}>
                <FaNetworkWired/> 
            </IconContext.Provider>
            
                Clustering

            <IconContext.Provider value={{className:'inline-react-icons3', color: "#86A0D3",size:".9em"}}>
               &nbsp; &nbsp; <FaRegFileCode/> 
            </IconContext.Provider>
            Other Skills
            
            <IconContext.Provider value={{className:'inline-react-icons4', color: "#86A0D3",size:".9em"}}>
                <FaDivide/> 
            </IconContext.Provider>
            Mathematics 


        </SectionTitle>

        <Writeup style={{marginLeft:"30px", marginBottom:"100px"}}>
            Experience deploying cluster <br/>
            using Ansible, Kuberentes, and <br/>
            Vagrant. To see more about this, <br/>
            check out my Raspberry Pi Cluster <br/>
            Project below!
            <br/>
        </Writeup>


        <Writeup style={{marginLeft:"150px", marginBottom:"100px"}}>
            Python, C++, C, Git, and LateX
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            

        </Writeup>
        
        
        
        <Writeup style={{marginLeft:"210px", marginBottom:"100px"}}>
            I am getting a degree in Pure <br/>
            Mathematics, so I do have the advantage <br/>
            of learning about some of the theories <br/>
            and applications of Computer Science at a <br/>
            theoretical level.

        </Writeup>

        </CenteredContainer>

    </SkillsBody>


)


export default Skills





