import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'






const NeoPixel = ({ children, className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "neopixel.jpg" }) {
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

  const StyledNeoPixel = styled(NeoPixel)`
width: 100%;
height: 100%;
background-position: center right;
background-size:500px 400px;
`;


export default StyledNeoPixel