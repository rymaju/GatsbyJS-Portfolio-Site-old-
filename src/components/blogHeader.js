import React from "react";
import { Link } from "gatsby";
import styles from "./blogHeader.module.css";

const BlogHeader = () => {
    return (
        <header>
            <div className={styles.name}>
                <Link to='/'>
                    <h1>Ryan Jung</h1>
                </Link>
            </div>

            <div className={styles.nav}>
                <h2>
                    <Link to='/'>home</Link> |{" "}
                    <Link to='/#projects'>projects</Link> |{" "}
                    <a href='/resume.pdf'>resume</a>
                </h2>
            </div>
        </header>
    );
};

export default BlogHeader;
