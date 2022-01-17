import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Headshot of Yaakov Bressler looking at the camera"
        src="../images/yaakov-bressler-headshot-white lq.jpeg"
      />
    </Layout>
  )
}

export default IndexPage
