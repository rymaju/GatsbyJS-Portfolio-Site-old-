import React from 'react';
import { Link } from 'gatsby';
import styles from './blogHeader.module.css';

const BlogHeader = () => {

    return(
        <header>
            <div className={styles.name} >
                <h1>Ryan Jung</h1>
            </div>
            
            <div className={styles.nav}>
                <h2>Projects | Blog | Twitter</h2>
            </div>
        </header>
    );
}

export default BlogHeader;