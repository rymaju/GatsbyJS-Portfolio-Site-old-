import React from "react";
import { Link } from "gatsby";
import styles from "./landing.module.css";
import scrollTo from "gatsby-plugin-smoothscroll";

class Landing extends React.Component {
    render () {
        return (
            <div className={styles.landingContainer}>
                <div className={styles.welcome}>
                    <h1 className={styles.name}>Ryan Jung</h1>
                    <p className={styles.subtitle}>
                        Computer Science major at Northeastern University,
                        currently pursuing a career in software engineering.
                    </p>
                    <h2 className={styles.subtitleLinks}>
                        <a onClick={() => scrollTo("#projects")}>projects</a>
                        <span className={styles.seperator}>|</span>
                        <Link to='/blog'>blog</Link>
                        <span className={styles.seperator}>|</span>
                        <a onClick={() => scrollTo("#contact")}>contact</a>
                        <span className={styles.seperator}>|</span>
                        <a href='/resume.pdf'>resume</a>
                    </h2>
                </div>
                <div className={styles.scrollDownContainer}>
                    <p className={styles.arrow}>{"▼"}</p>
                </div>
            </div>
        );
    }
}

export default Landing;
