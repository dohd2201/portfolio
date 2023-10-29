import Header from "./components/layouts/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/layouts/footer/Footer";
import AOS from "aos";
import { useEffect } from "react";

function App() {
    let skills = [
        {
            id: 1,
            name: "Frontend",
            data: [
                "HTML",
                "CSS",
                "SCSS",
                "BOOTSTRAP",
                "JAVASCRIPT",
                "JQUERY",
                "Vue JS",
                "REACT JS",
                "Next JS",
                "...",
            ],
        },
        {
            id: 2,
            name: "Backend",
            data: [
                "PHP",
                "LARAVEL",
                "NODE JS",
                "TYPESCRIPT",
                "DOCKER",
                "LINUX CLI",
                "BASIC EC2",
                "...",
            ],
        },
        {
            id: 3,
            name: "Database",
            data: ["MYSQL", "MARIADB", "MONGODB", "..."],
        },
        {
            id: 4,
            name: "SCM",
            data: ["GITHUB", "GITLAB"],
        },
    ];

    let menuItems = [
        {
            id: 1,
            name: "Home",
            id: "home_section",
        },
        {
            id: 2,
            name: "About",
            id: "about_section",
        },
        {
            id: 3,
            name: "Skill",
            id: "skill_section",
        },
        {
            id: 4,
            name: "Portfolio",
            id: "portfolio_section",
        },
        {
            id: 5,
            name: "Contact",
            id: "contact_section",
        },
    ];

    let projects = [
        {
            id: 1,
            name: "Yoseka to Gurica",
            image: "/assets/images/yoseka.png",
            link: "https://yosecatogurica.com/"
        },
        {
            id: 2,
            name: "Miglamu",
            image: "/assets/images/miglamu.png",
            link: "https://mi-glamu.com/"
        }
    ]

    let handleClickScroll = (elementId) => {
        document.getElementById(elementId).scrollIntoView();
    };

    useEffect(() => {
        AOS.init({
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
            initClassName: "aos-init", // class applied after initialization
            animatedClassName: "aos-animate", // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 200, // the delay on throttle used while scrolling the page (advanced)
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 100, // values from 0 to 3000, with step 50ms
            duration: 600, // values from 0 to 3000, with step 50ms
            easing: "ease", // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
        });
        AOS.refresh();
    }, []);
    return (
        <div className="app">
            <Header
                menuItems={menuItems}
                handleClickScroll={handleClickScroll}
            />
            <div className="main">
                <Home />
                <About />
                <Skill skills={skills} />
                <Portfolio projects={projects} />
                <Contact />
            </div>
            <Footer />
        </div>
    );
}

export default App;
