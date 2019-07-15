import React from "react";
import styles from "./label.module.css";
const Label = ({ color, children }) => {
    return (
        <div
            className={styles.label}
            style={{
                backgroundColor: color,
            }}
        >
            <p className={styles.labelText}>{children}</p>
        </div>
    );
};

export default Label;
