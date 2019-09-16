import React from "react"
import styled from 'styled-components'

import StyledBackgroundSection from "../components/background/background"
import Education from "../components/sections/education/education"
import ProjectPage from "../components/sections/projects/projects"
import Experience from "../components/sections/experience/experience"
import Contact from "../components/sections/contact-page/contact"
import Layout from "../components/layout"
import AboutMe from "../components/sections/about-me/aboutme"
import Skills from "../components/sections/test-skills/skills"
import TestPicture from "../components/sections/test-ic/testpicture"
//import Image from "../components/image"
// import SEO from "../components/seo"
import "../components/global.css"
import { useStaticQuery,graphql } from 'gatsby';
import Img from 'gatsby-image';
import "./index.css"


import Introduction from "../components/sections/introduction/index"

import selfFaded from "../images/self-faded.jpg"



const Body = styled.div`
  background-color:#1B1B1B;
  margin-left:-10px;
  margin-top:-1%;
  
`
const BackgroundColor = styled.div`
  width:100%;
  height:100%;
  border:5px solid black;
  background-color:black;
  position:absolute; 
  top:0;
`
const Base = (props) =>(
    <Body className="parent"  style={{overflowX:"hidden", overflowY:"visible",height:"90%",position:"relative"}}>
    <Layout className="parent" style={{zIndex:"-10",position:"relative"}}> 
    <Introduction className="parent" style={{zIndex:"9999",border:"10px solid red",position:"relative"}} ></Introduction>     
            <BackgroundColor>
            <Img
            fluid={props.data.imageOne.childImageSharp.fluid}
            imgStyle={{ objectFit: 'cover' }}
            className="background-image"
            style={{ overflowY:"hidden",position:"absolute", top:"0",height: '100vh' ,width:"110%",marginLeft:"0%",zIndex:"1"}}
            alt="This is a picture of my face."
            ></Img>
            </BackgroundColor>
            
          
          
          <AboutMe></AboutMe>
          <Skills></Skills> 
          <ProjectPage></ProjectPage>

          <Education></Education>

          <Contact></Contact>
          
    </Layout>

    
</Body>
)
export default Base;

export const query = graphql`
   query {
  	imageOne:file(relativePath:{eq: "MeUnchanged.JPG"}) {
      childImageSharp {
        fluid(maxWidth:1000){
            ...GatsbyImageSharpFluid
        }
      }
      	
      
    }
  
  }
`