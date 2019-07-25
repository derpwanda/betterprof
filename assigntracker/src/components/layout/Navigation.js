import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navigation = ({ title }) => {
    return (
        <nav className='navbar'>
            <h1>{title}</h1>

            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
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
