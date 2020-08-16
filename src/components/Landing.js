import React from "react";
import { Link } from "gatsby";
import styles from "./landing.module.css";
import scrollTo from "gatsby-plugin-smoothscroll";

class Landing extends React.Component {
    render () {
        return (
            <div className={styles.landingContainer}>
                <div className={styles.welcome}>
                    <h1 className={styles.name}>Hi I'm Ryan.</h1>
                    <p className={styles.subtitle}>
                        I’m studying Computer Science at Northeastern.
                    </p>
                    <p className={styles.subtitleBody}>
                        I like clean simple things that move and <i>pop</i>.
                    </p>
                    <p className={styles.subtitleBody}>
                        I create easy, performant, accessible interfaces made
                        with <b>love</b>.{" "}
                    </p>
                    <h2 className={styles.subtitleLinks}>
                        <a href onClick={() => scrollTo("#projects")}>projects</a>
                        <span className={styles.seperator}>|</span>
                        <Link to='/blog'>blog</Link>
                        <span className={styles.seperator}>|</span>
                        <a onClick={() => scrollTo("#contact")}>contact</a>
                        <span className={styles.seperator}>|</span>
                        <a href='/resume_ryan_jung.pdf'>resume</a>
                    </h2>
                </div>

            </div>
        );
    }
}

export default Landing;
