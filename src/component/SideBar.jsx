import React from 'react';
import './SideBar.css';

const SideBar = ({ onItemSelect }) => {
    const handleItemClick = (item) => {
        console.log(`Clicked item: ${item}`); // Output the clicked item
        localStorage.setItem('activeSidebarItem', item);
        const items = document.querySelectorAll('.sidebar-item');
        items.forEach((el) => el.classList.remove('active'));
        const clickedItem = Array.from(items).find((el) => el.textContent === item);
        if (clickedItem) clickedItem.classList.add('active');
        onItemSelect(item); // Notify the parent container about the selected item
    };

    return (
        <div className="sidebar-inner">
            <div className="sidebar-header">
                <h3>placeholder</h3>
            </div>
            <div className="sidebar-search">
                <input type="text" placeholder="Search" />
            </div>
            <ul className="sidebar-menu">
                <li className="sidebar-item active" onClick={() => handleItemClick('Overview')}>Overview</li>
                <li className="sidebar-item" onClick={() => handleItemClick('Analytics')}>Analytics</li>
                <li className="sidebar-item" onClick={() => handleItemClick('Products')}>Products</li>
                <li className="sidebar-item" onClick={() => handleItemClick('Tags+')}>Tags+</li>
                <li className="sidebar-item" onClick={() => handleItemClick('Members')}>Members</li>
                <li className="sidebar-item" onClick={() => handleItemClick('Inquiries')}>Inquiries</li>
            </ul>
        </div>
    );
};

export default SideBar;