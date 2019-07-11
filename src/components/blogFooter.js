import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import styles from './blogFooter.module.css'

const BlogFooter = () => {

    //get the photo data

    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "square-boi.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)


    return(
        <footer>
            <div className={styles.photoAndTextContainer}>
                <Img fluid={data.placeholderImage.childImageSharp.fluid} className={styles.photo}/>
                <h5 className={styles.text}>
                    Made by Ryan Jung, a computer science student at Northeastern University.
                </h5>
            </div>
            <div className={styles.iconContainer}>
                <h5>G, T, R</h5>
            </div>
        </footer>
    );
}

export default BlogFooter;