import React from "react";
import { SiGmail, SiInstagram, SiMessenger } from "react-icons/si";
import { BsArrowRightShort } from "react-icons/bs";

function Contact() {
    return (
        <section className="section contact_section" id="contact_section">
            <h2 className="section_title" data-aos="zoom-out-left">
                Contact me
            </h2>
            <span className="section_subtitle" data-aos="zoom-out-right">
                Get in touch
            </span>
            <div className="contact_wrapper">
                <a target="_blank" href="https://www.facebook.com/dohd2201/" className="contact_content" data-aos="zoom-out-up">
                    <SiMessenger
                        className="social_icon"
                        data-aos="fade-right"
                    />
                    <p className="social_name" data-aos="fade-down">
                        Messenger
                    </p>
                    <div className="write_me" data-aos="zoom-out-up">
                        <span>Write me</span>
                        <BsArrowRightShort className="right_arrow_icon" />
                    </div>
                </a>
                <a href="http://127.0.0.1:8000/perk/top?discount=20" className="contact_content" data-aos="zoom-out-up">
                    <SiGmail className="social_icon" data-aos="fade-up" />
                    <p className="social_name" data-aos="fade-down">
                        Gmail
                    </p>
                    <div className="write_me" data-aos="zoom-out-up">
                        <span>Write me</span>
                        <BsArrowRightShort className="right_arrow_icon" />
                    </div>
                </a>
                <a target="_blank" href="https://guriyose.caerux.com/top?discount=20" className="contact_content" data-aos="zoom-out-up">
                    <SiInstagram className="social_icon" data-aos="fade-left" />
                    <p className="social_name" data-aos="fade-down">
                        Instagram
                    </p>
                    <div className="write_me" data-aos="zoom-out-up">
                        <span>Write me</span>
                        <BsArrowRightShort className="right_arrow_icon" />
                    </div>
                </a>
            </div>
        </section>
    );
}

export default Contact;
