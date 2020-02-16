import React from "react";
import styles from "./about.module.css";
const About = () => {
    return (
        <div id='about' className={styles.skillsContainer}>
            <div>
                <h2 className={styles.sectionTitle}>about me</h2>
                <p>
                    <b>
                        Hi, my name is Ryan and I'm a software engineer
                        specializing in website development.
                    </b>{" "}
                    I have 4+ years of experience developing applications and am
                    continuing to hone my skills by pursuing a degree in
                    Computer Science at Northeastern University.
                </p>

                <p>
                    The vast majority of my projects are web-based. I have
                    experience writing both frontend and backend in various
                    libraries and frameworks. I'm most comfortable writing
                    ReactJS based frontends with ExpressJS backends. However, I
                    have experimented with many other technologies including
                    Vue, Vertx, and Ruby on Rails.
                </p>
                <p>
                    When I'm not on the computer, I do watercolor painting,
                    attempt to cook delicous meals for my friends, and volunteer
                    at community afterchool enrichment programs here in Boston.
                </p>
                <p>
                    Most importantly, I'm passionate about software and I love
                    to create software solutions. Contact me if you have a work
                    opportunity, or view my resume to see my professional
                    experience.
                </p>
            </div>
        </div>
    );
};

export default About;
