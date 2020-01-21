import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import Me from "../images/mePic.jpg"

const SiteMetadata = ({ pathname }) => {
  const {
    site: {
      siteMetadata: { siteUrl, title, twitter },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
        }
      }
    }
  `)

  return (
    <Helmet defer={false} defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <html lang="en" />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />
      <title>Chris Beggs | Comp Sci | Personal Portfolio</title>
        <meta name="title" content="Chris Beggs | Comp Sci | Personal Portfolio"/>
        <meta name="description" content="Chris Beggs - Personal Portfolio, Built using Gatsby.js"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://metatags.io/"/>
        <meta property="og:title" content="Chris Beggs | Comp Sci | Personal Portfolio"/>
        <meta property="og:description" content="Chris Beggs - Personal Portfolio, Built using Gatsby.js"/>
        <meta property="og:image" content={`${siteUrl}${Me}`}/>


    </Helmet>
  )
}

export default SiteMetadata

