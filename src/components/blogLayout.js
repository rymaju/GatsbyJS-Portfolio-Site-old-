import React from 'react';
//import { Link } from 'gatsby';

import BlogHeader from './blogHeader';
import BlogFooter from './blogFooter';

import styles from './blogLayout.module.css'


const Layout = ({children}) => {
    return(
        <div className={styles.container}>
            <BlogHeader />
            <div className={styles.main}>
                {children}
            </div>
            <BlogFooter />
        </div>
        
    )
    
}

export default Layout;