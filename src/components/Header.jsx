
import React from 'react';

const Header = () => {
    return (
        <header>
            <div>
                <img src="/logo.svg" alt="Airbnb logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Stays</a></li>
                    <li><a href="#">Experiences</a></li>
                    <li><a href="#">Online Experiences</a></li>
                </ul>
            </nav>
            <div>
                <a href="#">Become a host</a>
            </div>
        </header>
    );
};

export default Header;
