import React from "react";
import { FaGithub, FaFacebookF } from "react-icons/fa";
import { GrDown } from "react-icons/gr";

function Home() {
    return (
        <section className="section home_section" id="home_section">
            <div className="home_wrapper">
                <div className="home_img--mobile"></div>
                <div className="home_content">
                    <div className="home_social" data-aos="fade-up-right">
                        <a className="home_social_icon home_social_icon-first" href="#" target="_blank">
                            <FaGithub className="icon icon_github" href="" target="_blank"/>
                        </a>
                        <a className="home_social_icon home_social_icon-second" href="https://www.facebook.com/dohd2201/" target="_blank">
                            <FaFacebookF className="icon icon_facebook" />
                        </a>
                    </div>
                    <div className="home_img" data-aos="fade-left"></div>
                    <div className="home_info">
                        <p className="home_intro" data-aos="fade-up">
                            Hello, my name is
                        </p>
                        <h1 className="home_name" data-aos="fade-right">
                            Ha Duy Do ...
                        </h1>
                        <div className="home_title">
                            <p data-aos="fade-down">
                                I'm a <span>Fullstack Developer</span>
                            </p>
                        </div>
                        <div className="contact_button">
                            <a
                                href="https://www.facebook.com/dohd2201/"
                                target="_blank"
                                className="btn"
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="1000"
                            >
                                Contact me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home_arrow" data-aos="zoom-in">
                <GrDown className="arrow-down__icon" />
            </div>
        </section>
    );
}

export default Home;
