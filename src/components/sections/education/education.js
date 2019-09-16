
import React from "react"
import styled from 'styled-components'
import { FaBookReader } from 'react-icons/fa';
import { IconContext } from "react-icons";
import "./education.css"


import chalkboard from "../../../images/chalkboard.svg"

const Title = styled.div`
    font-size:4em;
    color:#86A0D3;
    margin-left:80px;
    margin-top:-200px;

`


const EducationTitle = styled.div`
    font-size:2em;
    color:#86A0D3;
    padding-left:10px;
`
const EducationDescrip = styled.div`
    color:white;
    font-size:1.4em;
    margin-left:45px;
`

const EducationItem = styled.div`
    display:table;
    margin-left:300px;
    margin-top:50px;
`

const Container = styled.div`
    display:inline-block;
    
`

const Chalkboard = styled.div`
    display:table;
    position:absolute;
    margin-left:1300px;
    top:0px;
    right:150px;
`


const Education = (props) => (


    <div className="parent" style={{marginTop:"250px",fontFamily:"Lora"}}>
        <Title className="main-title-educ">
            Education
        </Title>

        <EducationItem className="educ-item-educ">
        <Container className=" educ-title">
            <IconContext.Provider value={{ color: "#86A0D3",size:"2em"}}>
                <FaBookReader></FaBookReader>
            </IconContext.Provider>
        </Container>

        <Container>
            <EducationTitle className="educ-section-title">
                    University of Colorado Boulder 
            </EducationTitle>
        </Container>
            
            <EducationDescrip className="educ-descrip">
                Currently getting a dual degree in Computer Science and Pure Mathematics
            </EducationDescrip>
        </EducationItem>


        <Chalkboard><img className="chalkboard" src={chalkboard} alt="haha"/></Chalkboard>
    </div>
)



export default Education