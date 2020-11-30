import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import AnnouncementsComponent from '../components/announcements'

const IndexPage = () => {
  const data = useStaticQuery(pageQuery)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Announcements</h1>
      <AnnouncementsComponent announcements={data.allStrapiAnnouncements.edges} />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage

const pageQuery = graphql`
  query IndexQuery {
    allStrapiAnnouncements {
      edges {
        node {
          id
          title 
          content
        }
      }
    }
  }
`
