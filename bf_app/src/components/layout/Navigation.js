import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navigation = ({ title }) => {
    return (
        <nav className='navbar'>
            <h1>{title}</h1>

            <ul>
                <li>
                    <Link to='/'>ProfDash</Link>
                </li>
                <li>
                    <Link to='/ProfView'>ProfView</Link>
                </li>
                <li>
                    <Link to='/StudDash'>StuDash</Link>
                </li>
                <li>
                    <Link to='/StudView'>StuView</Link>
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
