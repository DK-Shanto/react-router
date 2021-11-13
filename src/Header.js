import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <NavLink to='/home'
                className={(navData) => navData.isActive ? 'nav-active' : ''}
            >Home</NavLink>
            <NavLink to='/friends' className={(navData) => navData.isActive ? 'nav-active' : ''}>Friends</NavLink>
            <NavLink to='/about' className={(navData) => navData.isActive ? 'nav-active' : ''}>About page</NavLink>
        </nav>
    );
};

export default Header;