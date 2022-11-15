import React, { Component } from "react";
import HeaderImage from "./static/images/header.png";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <img
                src={HeaderImage}
                alt="IndoSoft"
                title="IndoSoft"
                className="header-image"
            />
        );
    }
}

export default Header;
