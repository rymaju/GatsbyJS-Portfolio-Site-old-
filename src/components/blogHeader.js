import React from "react";
import { Link } from "gatsby";
import styles from "./blogHeader.module.css";

const BlogHeader = () => {
    return (
        <header>
            <div className={styles.name}>
                <Link to="/">
                    <h1>Ryan Jung</h1>
                </Link>
            </div>

            <div className={styles.nav}>
                <h2>
                    <Link to="/#projects">Projects</Link> |{" "}
                    <Link to="/blog/">Blog</Link> |{" "}
                    <Link to="/blog/about/">About Me</Link>
                </h2>
            </div>
        </header>
    );
};

export default BlogHeader;
