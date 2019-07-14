import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styles from "./projects.module.css";
import Img from "gatsby-image";
import Icon from "./icon";

const Label = ({ color, children }) => {
    return (
        <div
            style={{
                backgroundColor: color,
                width: `fit-content`,
                padding: `5px`,

                marginRight: `10px`,
                marginLeft: `0px`,
                marginBottom: `10px`
            }}
        >
            <p
                style={{
                    textAlign: `center`,
                    margin: `auto`,
                    whiteSpace: `nowrap`,
                }}
            >
                {children}
            </p>
        </div>
    );
};

const Skills = () => {
    //query icons for each skill
    const data = useStaticQuery(graphql`
        query {
            java: file(relativePath: { eq: "java.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            javascript: file(relativePath: { eq: "javascript.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            ruby: file(relativePath: { eq: "ruby.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            php: file(relativePath: { eq: "php.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            mysql: file(relativePath: { eq: "mysql.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            python: file(relativePath: { eq: "python.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            reactjs: file(relativePath: { eq: "reactjs.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            gatsbyjs: file(relativePath: { eq: "gatsby-icon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            rails: file(relativePath: { eq: "rails.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            laravel: file(relativePath: { eq: "laravel.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            express: file(relativePath: { eq: "express.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            test: file(relativePath: { eq: "example_screenshot.JPG" }) {
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
                    <h2 className={styles.skillTitle}>Example Project</h2>
                    <div className={styles.skillRow}>
                        <Img
                            fluid={data.test.childImageSharp.fluid}
                            style={{
                                height: `200px`,
                                minWidth: `350px`,
                                width: `fit-content`,
                                margin: `30px`,
                                marginTop: `0`,
                                boxShadow: `4px 6px 5px #555555`,
                                // border: `solid #cccccc 1px`,
                            }}
                        />
                        <div
                            className={styles.skillsColumn}
                            style={{
                                maxWidth: `400px`,
                                textAlign: `left`,
                                overflow: `hidden`,
                            }}
                        >
                            <p>
                                This is a description of the project that is
                                here. It uses some cool technololgies to do
                                stuff. Increased amazingness factor by up to
                                500% and happy people by 42 dollars.
                            </p>
                            <div
                                style={{
                                    color: `#ffffff`,
                                    fontWeight: `300`,
                                    display: `flex`,
                                    justifyContent: `flex-start`,
                                    flexWrap: `wrap`,
                                    marginBottom: `30px`,
                                }}
                            >
                                <Label color={`seagreen`}>NodeJS</Label>
                                <Label color={`indigo`}>GatsbyJS</Label>
                                <Label color={`dodgerblue`}>ReactJS</Label>
                                <Label color={`tomato`}>Ruby on Rails</Label>
                            </div>
                            <div>
                                <a>See Code</a>
                                &nbsp;|&nbsp;
                                <a>View Live</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
