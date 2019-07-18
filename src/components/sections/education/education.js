
import React from "react"
import styled from 'styled-components'
import { FaBookReader } from 'react-icons/fa';
import { IconContext } from "react-icons";


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
    margin-left:100px;
    margin-top:50px;
`

const Container = styled.div`
    display:inline-block;
    
`


const Education = (props) => (


    <div style={{marginTop:"250px",fontFamily:"Lora"}}>
        <Title>
            Education
        </Title>

        <EducationItem>
        <Container>
            <IconContext.Provider value={{ color: "#86A0D3",size:"2em"}}>
                <FaBookReader></FaBookReader>
            </IconContext.Provider>
        </Container>
        <Container>
            <EducationTitle>
                    University of Colorado Boulder 
            </EducationTitle>
        </Container>
            
            <EducationDescrip>
                Currently getting a dual degree in Computer Science and Pure Mathematics
            </EducationDescrip>
        </EducationItem>



    </div>
)



export default Education