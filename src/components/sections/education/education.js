import "./education.css"
import React from "react"
import styled from 'styled-components'
import { FaBookReader } from 'react-icons/fa';
import { IconContext } from "react-icons";



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
    margin-left:2vw;
    @media (max-width: 800px){
        font-size:1.6em;
        margin-left:0;
    }
`
const EducationDescrip = styled.div`
    color:white;
    font-size:1.4em;
    width:50vw;
    margin-left:5vw;
    @media (max-width: 900px){
        width:80vw;
    }
    @media (max-width: 800px){
        font-size:1.3em;
    }
`

const EducationItem = styled.div`
    display:table;
    margin-left:5vw;
    margin-top:50px;
`

const Container = styled.div`
    display:inline-block;
    
`

const Chalkboard = styled.div`
    display:table;
    position:absolute;
    top:0px;
    right:5vw;
    @media (max-width: 900px){
        display:none;
    }
`
const BookReaderIcon = styled(FaBookReader)`
    @media (max-width: 900px){
        display:none;
    }
`

const Education = (props) => (


    <div className="parent education-parent">
        <Title className="main-title-educ">
            Education
        </Title>

        <EducationItem className="educ-item-educ">
        <Container className=" educ-title">
            <IconContext.Provider value={{ color: "#86A0D3",size:"2em"}}>
                <BookReaderIcon></BookReaderIcon>
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


        <Chalkboard><img style={{width:"25vw"}} className="chalkboard" src={chalkboard} alt="haha"/></Chalkboard>
    </div>
)



export default Education