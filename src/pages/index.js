import React from "react";

import SEO from "../components/seo";

import Landing from "../components/Landing";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import About from "../components/about";
require("smooth-scroll")('a[href*="#"]');

class IndexPage extends React.Component {
    render() {
        return (
            <div style={{ overflowX: `hidden` }}>
                <SEO
                    title="Portfolio"
                    description="Ryan Jung's software engineering and web development portfolio, including skills and technologies as well as personal projects."
                />
                <Landing />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        );
    }
}

export default IndexPage;
