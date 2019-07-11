import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Error 404</h1>
    <p>Oops, the file you requested does not exist. ;-;</p>
  </Layout>
)

export default NotFoundPage
