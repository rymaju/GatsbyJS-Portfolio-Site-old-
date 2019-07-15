import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styles from "./projects.module.css";
import Img from "gatsby-image";
import Icon from "./icon";
import Label from "./label";

const Projects = () => {
    //query icons for each skill
    const data = useStaticQuery(graphql`
        query {
            explorable_trie: file(relativePath: { eq: "explorable_trie.JPG" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    console.log(data);
    return (
        <div className={styles.skillsContainer} id="projects">
            <h1>Projects</h1>
            <div className={styles.skillColumn}>
                <div className={styles.skillColumn}>
                    <h2 className={styles.skillTitle}>Explorable Trie</h2>

                    <div className={styles.skillRow}>
                        <Img
                            fluid={data.explorable_trie.childImageSharp.fluid}
                            className={styles.projectImage}
                        />

                        <div
                            className={[
                                styles.skillsColumn,
                                styles.projectDescription,
                            ].join(" ")}
                        >
                            <p className={styles.projectText}>
                                Explorable Trie is a educational web page that
                                allows users to learn about and play with the
                                Trie data structure. This was a final project
                                for my high school data structures course. It
                                uses basic Javascript and D3.js to display the
                                interactive Trie model.
                            </p>
                            <div className={styles.linksContainer}>
                                <a href="https://glitch.com/edit/#!/explorable-trie">
                                    See Code
                                </a>
                                &nbsp;|&nbsp;
                                <a href="http://explorable-trie.glitch.me/">
                                    View Live
                                </a>
                            </div>
                            <div className={styles.labelContainer}>
                                <Label color={`orangered`}>D3.js</Label>
                                {/* <Label color={`seagreen`}>NodeJS</Label>
                                <Label color={`indigo`}>GatsbyJS</Label>
                                <Label color={`dodgerblue`}>ReactJS</Label>
                                <Label color={`tomato`}>Ruby on Rails</Label> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
