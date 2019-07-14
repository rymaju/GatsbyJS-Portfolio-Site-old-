import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styles from "./skills.module.css";

import Icon from "./icon";

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
        }
    `);
    console.log(data);
    return (
        <div className={styles.skillsContainer} id="skills">
            <h1>Skills</h1>
            <div className={styles.skillColumn}>
                <div className={styles.skillColumn}>
                    <h2 className={styles.skillTitle}>Languages</h2>
                    <div className={styles.skillRow}>
                        <Icon fluid={data.java.childImageSharp.fluid}>
                            Java
                        </Icon>
                        <Icon fluid={data.javascript.childImageSharp.fluid}>
                            Javascript
                        </Icon>
                        <Icon fluid={data.ruby.childImageSharp.fluid}>
                            Ruby
                        </Icon>
                        <Icon fluid={data.php.childImageSharp.fluid}>PHP</Icon>
                        <Icon fluid={data.mysql.childImageSharp.fluid}>
                            MySQL
                        </Icon>
                        <Icon fluid={data.python.childImageSharp.fluid}>
                            Python
                        </Icon>
                    </div>
                </div>

                <div className={styles.skillColumn}>
                    <h2 className={styles.skillTitle}>Frameworks</h2>
                    <div className={styles.skillRow}>
                        <Icon fluid={data.reactjs.childImageSharp.fluid}>
                            ReactJS
                        </Icon>
                        <Icon fluid={data.gatsbyjs.childImageSharp.fluid}>
                            GatsbyJS
                        </Icon>
                        <Icon fluid={data.express.childImageSharp.fluid}>
                            ExpressJS
                        </Icon>
                        <Icon fluid={data.rails.childImageSharp.fluid}>
                            Rails
                        </Icon>
                        <Icon fluid={data.laravel.childImageSharp.fluid}>
                            Laravel
                        </Icon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
