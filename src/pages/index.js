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


import Introduction from "../components/sections/introduction/index"

import selfFaded from "../images/self-faded.jpg"



const Body = styled.div`
  background-color:#1B1B1B;
  margin-left:-10px;
  margin-top:-1%;
`
const Base = (props) =>(
    <Body style={{overflowX:"hidden", overflowY:"visible",height:"90%"}}>
    <Layout>      
          <StyledBackgroundSection>
              <Introduction/>  
              
          </StyledBackgroundSection>
          <AboutMe></AboutMe>
          <Skills></Skills> 
          <ProjectPage></ProjectPage>

          <Education></Education>

          <Contact></Contact>
          <Img
    fluid={props.data.imageOne.childImageSharp.fluid}
  alt="This is a picture of my face."
        />
    </Layout>

    
</Body>
)
export default Base;

export const query = graphql`
   query {
  	imageOne:file(relativePath:{eq: "self-faded.jpg"}) {
      childImageSharp {
        fluid(maxWidth:1000){
            ...GatsbyImageSharpFluid
        }
      }
      	
      
    }
  
  }
`