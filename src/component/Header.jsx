import React from 'react';
import './Header.css';

// Header.jsx

const Header = ({ isLoading, lastUpdated, userName, userStatus }) => {
    return (
        <div className="header-container">
            <div className="header-left">
                {isLoading ? <span>Loading...</span> : <span>Data Loaded</span>}
                <span className="last-updated">Last updated: {lastUpdated || 'N/A'}</span>
            </div>
            <div className="header-right">
                <img src="https://picsum.photos/seed/${Math.random()}/300/300" alt=" " />
                <span className="user-name">{userName || 'User'}</span>
                <span className="user-status">{userStatus || 'N/A'}</span>
            </div>
        </div>
    );
};

export default Header;