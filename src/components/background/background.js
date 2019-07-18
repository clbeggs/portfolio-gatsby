import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'





const Background = ({ children, className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "self-faded.jpg" }) {
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

const StyledBackgroundSection = styled(Background)`
width: 100vw;
height: 100vh;
background-position: center right;
background-size:90vw;
`;





export default StyledBackgroundSection



