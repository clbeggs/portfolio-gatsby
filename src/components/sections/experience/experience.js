
import React from "react"
import styled from 'styled-components'
import { FaBuilding } from 'react-icons/fa';
import { IconContext } from "react-icons";


const Title = styled.div`
    font-size:4em;
    color:#86A0D3;
    margin-left:80px;
    margin-top:-200px;
`



const ExperienceTitle = styled.div`
    font-size:2em;
    color:#86A0D3;
    padding-left:10px;
`
const ExperienceDescrip = styled.div`
    color:white;
    font-size:1.4em;
    margin-left:45px;
`

const ExperienceItem = styled.div`
    display:table;
    margin-left:100px;
    margin-top:50px;
`
const Container = styled.div`
    display:inline-block;
    
`


const Experience = (props) => (

    <div style={{marginTop:"300px"}}>

        <Title>
            Experience
        </Title>

        <ExperienceItem>
            <Container>
                <IconContext.Provider value={{ color: "#86A0D3",size:"2em"}}>
                    <FaBuilding></FaBuilding>
                </IconContext.Provider>
            </Container>

            <Container>
                <ExperienceTitle>
                    No Formal Experience
                </ExperienceTitle>
            </Container>

            <ExperienceDescrip>
                    I have no formal experience in the CS Industry, but I am <br/>
                    working on my projects every day and learning from my college CS courses!
                </ExperienceDescrip>
        </ExperienceItem>
    </div>

)

export default Experience