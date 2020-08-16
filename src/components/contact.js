import React from "react";
import styles from "./contact.module.css";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Contact = () => {
    const data = useStaticQuery(graphql`
        query {
            profilePicture: file(relativePath: { eq: "ryan_square.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <div id='contact' className={styles.contactContainer}>
            <h1 className={styles.sectionTitle}>Say hi!</h1>

            <p>Email me at ryan.matthew.jung@gmail.com</p>

            <p>I don't bite, I swear. </p>

            <p>Oh, and check out all my projects on <a href="https://github.com/rymaju">Github</a>!</p>
        </div>
    );
};

export default Contact;
