import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function Portfolio(props) {
    return (
        <section className="section portfolio_section" id="portfolio_section">
            <h2 className="section_title" data-aos="zoom-out-left">
                Portfolio
            </h2>
            <span className="section_subtitle" data-aos="zoom-out-right">
                My projects
            </span>
            <div className="portfolio_wrapper" data-aos="fade-up">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {props.projects.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="portfolio_content">
                                <img src={item.image} />
                                <a target="_blank" href={item.link}
                                    className="btn btn-slide"
                                    data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="1000"
                                >
                                    View
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Portfolio;
