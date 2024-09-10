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
                        I come from Nghệ An 🌍 and developed a strong passion for Web Development since my second year.
                    </span>
                    <br />
                    <span
                        className="line line__2"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        I love building web applications. Whenever possible, I enjoy creating things using Node.js, PHP, Laravel, WordPress, and modern JavaScript libraries/frameworks like ReactJS, NextJS, VueJS, and jQuery.
                    </span>
                    <br />
                    <span
                        className="line line__3"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        In my free time, I enjoy listening to music 🎶, visiting peaceful places 🏞️, and playing sports 🏀.
                    </span>
                    <br />
                    <span
                        className="line line__4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        I consider myself an introvert 🤫, and I always aim for personal growth and self-improvement.
                    </span>
                    <br />
                    <span
                        className="line line__5"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        My upcoming goals include enhancing my technical skills, obtaining AWS certifications, and improving my language proficiency 🌐.
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
