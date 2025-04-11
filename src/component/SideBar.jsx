import React from 'react';
import './SideBar.css';

const SideBar = () => {
    
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h3>placeholder</h3>
            </div>
            <div className="sidebar-search">
                <input type="text" placeholder="Search" />
            </div>
            <ul className="sidebar-menu">
                <li className="sidebar-item active">Overview</li>
                <li className="sidebar-item">Analytics</li>
                <li className="sidebar-item">Products</li>
                <li className="sidebar-item">Tags+</li>
                <li className="sidebar-item">Members</li>
                <li className="sidebar-item">Inquiries</li>
            </ul>
        </div>
    );
};

export default SideBar;