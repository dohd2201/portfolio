import React from "react";

function About() {
    console.log(process.env.PUBLIC_URL);
    return (
        <section className="section about_section" id="about_section">
            <h2 className="section_title" data-aos="zoom-out-left">
                About me
            </h2>
            <span className="section_subtitle" data-aos="zoom-out-right">
                My introduction
            </span>
            <div className="about_content">
                <p className="typed_text">
                    <span
                        className="line line__1"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                    >
                        Hi there 👋, My name is Do, and I am a student at National Economics University.
                        I had a strong passion for Web
                        Development since my second year.
                    </span>
                    <br />
                    <span
                        className="line line__2"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        I love to building web application. Whenever possible, I
                        also put my love of creating things using Node.js, PHP, Laravel and
                        Modern Javascript Library/Frameworks like ReactJS, NextJS, VueJS and Jquery.
                    </span>
                </p>
            </div>
            <div className="download_button">
                <a
                    className="btn"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                    href="/Ha-Duy-Do.pdf"
                    download="Ha-Duy-Do.pdf"
                >
                    Download CV
                </a>
            </div>
        </section>
    );
}

export default About;
