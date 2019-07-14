import React from "react";
import styles from "./icon.module.css";
import Img from "gatsby-image";

const Icon = ({ fluid, children }) => {
    return (
        <div className={styles.iconContainer}>
            <Img fluid={fluid} className={styles.icon} />
            <p className={styles.iconText}>{children}</p>
        </div>
    );
};

export default Icon;