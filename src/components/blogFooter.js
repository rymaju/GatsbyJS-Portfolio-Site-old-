import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import styles from "./blogFooter.module.css";

const BlogFooter = () => {
    //get the photo data

    const data = useStaticQuery(graphql`
        query {
            profilePicture: file(relativePath: { eq: "square-boi.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            githubIcon: file(relativePath: { eq: "github.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            twitterIcon: file(relativePath: { eq: "twitter.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            linkedinIcon: file(relativePath: { eq: "linkedin.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            mail: file(relativePath: { eq: "gmail.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <div className={styles.footerContainer}>
            <Img
                fluid={data.profilePicture.childImageSharp.fluid}
                className={styles.photo}
            />
            <p className={styles.text}>
                Made by Ryan Jung, a computer science student at Northeastern
                University.
            </p>
            <div className={styles.iconContainer}>
                <a href="mailto:ryan.matthew.jung@gmail.com">
                    <Img
                        fluid={data.mail.childImageSharp.fluid}
                        className={styles.icon}
                    />
                </a>
                <a href="https://github.com/rymaju">
                    <Img
                        fluid={data.githubIcon.childImageSharp.fluid}
                        className={styles.icon}
                    />
                </a>
                <a href="https://www.linkedin.com/in/ryan-jung-02101a160/">
                    <Img
                        fluid={data.linkedinIcon.childImageSharp.fluid}
                        className={styles.icon}
                    />
                </a>
                <a href="https://twitter.com/ryanmatthewjung">
                    <Img
                        fluid={data.twitterIcon.childImageSharp.fluid}
                        className={styles.icon}
                    />
                </a>
            </div>
        </div>
    );
};

export default BlogFooter;
