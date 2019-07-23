import React from "react";
import PropTypes from "prop-types";

const Navigation = ({ title }) => {
    return (
        <nav className='navbar'>
            <h1>{title}</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
        </nav>
    );
};

Navigation.defaultProps = {
    title: PropTypes.string.isRequired
};

Navigation.propTypes = {
    title: "Better Professor"
};

export default Navigation;
