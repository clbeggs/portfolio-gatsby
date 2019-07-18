
import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const DesktopCode = ({ children, className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "desktop-apps.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
         
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
                           backgroundColor={`black`}> 
  
  
                        {children}       
                
          </BackgroundImage>
       )
     }
     }
    />
  )
  const StyledDesktopCode = styled(DesktopCode)`
width: 100%;
height: 100%;
background-position: center left;
background-size:600px 400px;
`;

export default StyledDesktopCode