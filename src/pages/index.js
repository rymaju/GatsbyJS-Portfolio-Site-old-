import React from "react";

import SEO from "../components/seo";

import Landing from "../components/Landing";
import Projects from "../components/projects";
import Contact from "../components/contact";
import About from "../components/about";
//require("smooth-scroll")('a[href*="#"]'); this breaks netlify for some reason

class IndexPage extends React.Component {
    render () {
        return (
            <div style={{ overflowX: `hidden` }}>
                <SEO
                    title='Ryan Jung Software Developer Portfolio'
                    description="Ryan Jung's software engineering and web development portfolio, including skills and technologies as well as personal projects."
                />
                <Landing />
                <About />

                <Projects />
                <Contact />
            </div>
        );
    }
}

export default IndexPage;
