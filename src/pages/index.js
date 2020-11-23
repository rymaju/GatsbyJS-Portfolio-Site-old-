import React from 'react'

import SEO from '../components/seo'

import Landing from '../components/Landing'
import Projects from '../components/projects'
import Contact from '../components/contact'
import SideMenu from '../components/SideMenu'
// require("smooth-scroll")('a[href*="#"]'); this breaks netlify for some reason

class IndexPage extends React.Component {
  render () {
    return (
      <div style={{ overflowX: 'hidden' }}>

        <SideMenu />
        <SEO
          title='Ryan Jung'
          description="Ryan Jung's software engineering and web development portfolio, including skills and technologies as well as personal projects."
        />
        <Landing />
        <Projects />
        <Contact />
      </div>
    )
  }
}

export default IndexPage
