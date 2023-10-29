import React from "react";
import { GiHamburgerMenu } from "react-icons/gi"

function Header(props) {
    return (
        <header className="header header_scroll">
            <div className="header_wrapper">
                <h1 className="header_logo" onClick={() => props.handleClickScroll('home_section')} data-aos="zoom-in-right"><img src="/assets/images/dog.png" />Hello,Do</h1>
                <div className="header_menu">
                    <ul className="menu_list" data-aos="zoom-in-left">
                        {
                            props.menuItems.map((item, index) => (
                                <li onClick={() => props.handleClickScroll(item.id)} key={index} className="menu_item">{item.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <GiHamburgerMenu className="icon_hamburger" />
            </div>
        </header>
    );
}

export default Header;
