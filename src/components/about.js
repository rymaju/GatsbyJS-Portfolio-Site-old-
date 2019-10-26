import React from "react";
import styles from "./about.module.css";
const About = () => {
    return (
        <div id="about" className={styles.skillsContainer}>
            <h1>About Me</h1>
            <p>
                <b>
                    Hi, my name is Ryan and I'm a software engineer specializing
                    in website development.
                </b>{" "}
                I have 4+ years of computer science experience and am continuing
                to learn computer science at Northeastern University. I have a
                broad range of skills, which you can view below. The vast
                majority of my projects have a ReactJS frontend, but I have used
                many different technologies for the backend. I can learn new
                technologies very quickly and I have tangible projects to prove
                my expertise.
            </p>
            <p>
                Most importantly, I'm passionate about software and I love to
                create things. Contact me if you have a work opportunity, or
                view my resume to see my professional experience.
            </p>
        </div>
    );
};

export default About;
