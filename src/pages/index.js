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
//import Image from "../components/image"
// import SEO from "../components/seo"
import "../components/global.css"


import Introduction from "../components/sections/introduction/index"




const Body = styled.div`
  background-color:#1B1B1B;
  margin-left:-10px;
  margin-top:-1%;
`

const IndexPage = (props) => (

    <Body style={{overflowX:"hidden"}}>
        <Layout>      
              <StyledBackgroundSection>
                  <Introduction/>  
                  
              </StyledBackgroundSection>
              <AboutMe></AboutMe>
              <Skills></Skills> 
              <ProjectPage></ProjectPage>

              <Education></Education>
              <Experience></Experience>

              <Contact></Contact>
            
        </Layout>
        
    </Body>
)

export default IndexPage
