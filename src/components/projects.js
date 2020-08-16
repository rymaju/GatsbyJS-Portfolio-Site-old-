import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styles from "./projects.module.css";
import Img from "gatsby-image";
import Label from "./label";

const Projects = () => {
    //query images for each project
    const data = useStaticQuery(graphql`
        query {
            explorable_trie: file(relativePath: { eq: "explorable_trie.JPG" }) {
                childImageSharp {
                    fluid(maxWidth: 1080) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            portfolio: file(relativePath: { eq: "portfolio.JPG" }) {
                childImageSharp {
                    fluid(maxWidth: 1080) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            fundies: file(relativePath: { eq: "fundiescollab.JPG" }) {
                childImageSharp {
                    fluid(maxWidth: 1080) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    console.log(data);
    return (
        <div className={styles.projectsContainer} id='projects'>
            <h2 className={styles.sectionTitle}>Projects.</h2>
            <div className={styles.projectColumn}>
                <div className={styles.projectColumn}>
                    <h2 className={styles.projectTitle}>FundiesCollab</h2>

                    <div className={styles.projectRow}>
                        <Img
                            fluid={data.fundies.childImageSharp.fluid}
                            className={styles.projectImage}
                        />

                        <div
                            className={[
                                styles.projectsColumn,
                                styles.projectDescription,
                            ].join(" ")}
                        >
                            <p className={styles.projectText}>
                                FundiesCollab is a collaborative real-time code
                                editor for Java that allows users to instantly
                                compile and test their code using the Tester and
                                Image libraries from the introductory Computer
                                Science courses at Northeastern University.
                                FundiesCollab uses Vue for the frontend, and a
                                combination of socket.io, Docker, and Redis on
                                an Express server to create secure, fast, and
                                persistent "rooms" where users can code together.
                            </p>
                            <div className={styles.linksContainer}>
                                <a href='https://github.com/rymaju/fundiescollab'>
                                    See Code
                                </a>
                                &nbsp;|&nbsp;
                                <a href='https://fundiescollab.com'>
                                    View Live
                                </a>
                            </div>
                            
                        </div>
                    </div>

                    <h2 className={styles.projectTitle}>
                        Gatsby Portfolio & Blog
                    </h2>

                    <div className={styles.projectRow}>
                        <Img
                            fluid={data.portfolio.childImageSharp.fluid}
                            className={styles.projectImage}
                        />

                        <div
                            className={[
                                styles.projectsColumn,
                                styles.projectDescription,
                            ].join(" ")}
                        >
                            <p className={styles.projectText}>
                                My personal site was built using GatsbyJS, which
                                required knowledge of ReactJS as well as basic
                                HTML/CSS and Javascript. Additional libraries
                                such as anime.js were used in order to create
                                SVG Path animations such as on the at the top of
                                this page. SEO components were also used to
                                increase searchability of the site, and uses
                                Gatsby lazy loading to achieve nearly perfect
                                scores on Lighthouse web audit.
                            </p>
                            <div className={styles.linksContainer}>
                                <a href='https://github.com/rymaju/GatsbyJS-Portfolio-Site'>
                                    See Code
                                </a>
                                &nbsp;|&nbsp;
                                <a href='https://ryan-jung.netlify.com'>
                                    View Live (You're already here)
                                </a>
                            </div>
                            
                        </div>
                    </div>

                    <h2 className={styles.projectTitle}>Explorable Trie</h2>
                    <div className={styles.projectRow}>
                        <Img
                            fluid={data.explorable_trie.childImageSharp.fluid}
                            className={styles.projectImage}
                        />

                        <div
                            className={[
                                styles.projectsColumn,
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
                                <a href='https://github.com/rymaju/explorable-trie'>
                                    See Code
                                </a>
                                &nbsp;|&nbsp;
                                <a href='http://explorable-trie.glitch.me/'>
                                    View Live
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
