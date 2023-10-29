import React from "react";

function Skill(props) {
    return (
        <section className="section skill_section" id="skill_section">
            <h2 className="section_title" data-aos="zoom-out-left">
                Skills
            </h2>
            <span className="section_subtitle" data-aos="zoom-out-right">
                My technical skills
            </span>
            <div className="skill_wrapper">
                {props.skills.map((item, index) => (
                    <div key={index} className="skill_content" data-aos="fade-up">
                        <span className="skill_title" data-aos="fade-right">
                            {item.name}
                        </span>
                        <div className="skill_list_item" data-aos="fade-up">
                            {item.data.map((val, index) => (
                                 <span key={index} className="skill_item">{val}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skill;
