import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'


const Cluster = ({ children, className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "cluster.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160,grayscale: true,
            ) {
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
  
const StyledCluster = styled(Cluster)`
width: 100%;
height: 100%;
background-position: center;
background-size:400px 400px;
`;



export default StyledCluster
