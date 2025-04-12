import React from 'react';
import './SideBar.css';

const SideBar = ({ onItemSelect }) => {
    const handleItemClick = (item) => {
        localStorage.setItem('activeSidebarItem', item);
        const items = document.querySelectorAll('.sidebar-item, .sidebar-item-mod');
        items.forEach((el) => el.classList.remove('active'));
        const clickedItem = Array.from(items).find((el) => el.textContent === item);
        if (clickedItem) clickedItem.classList.add('active');
        onItemSelect(item); // Notify the parent container about the selected item
    };

    const [showSubMenu, setShowSubMenu] = React.useState(false);

    const handleSubMenuToggle = () => {
        setShowSubMenu(!showSubMenu);
    };

    if (!localStorage.getItem('activeSidebarItem')) {
        localStorage.setItem('activeSidebarItem', 'Overview');
    }

    if (localStorage.getItem('activeSidebarItem') === 'ProductsTable' || localStorage.getItem('activeSidebarItem') === 'ProductsStore' || localStorage.getItem('activeSidebarItem') === 'ProductsCreate') {
        const items = document.querySelectorAll('.sidebar-item-mod');
        const clickedItem = Array.from(items).find((el) => el.textContent.includes('Products +'));
        if (clickedItem) clickedItem.classList.add('active');
    }

    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredItems = [
        { name: 'Overview', type: 'item' },
        { name: 'Analytics', type: 'item' },
        { name: 'Products +', type: 'submenu', subItems: ['ProductsTable', 'ProductsStore', 'ProductsCreate'] },
        { name: 'Tags+', type: 'item' },
        { name: 'Members', type: 'item' },
        { name: 'Inquiries', type: 'item' },
    ].filter((item) => {
        if (item.type === 'submenu') {
            return item.name.toLowerCase().includes(searchTerm) || item.subItems.some((subItem) => subItem.toLowerCase().includes(searchTerm));
        }
        return item.name.toLowerCase().includes(searchTerm);
    });

    return (
        <div className="sidebar-inner">
            <div className="sidebar-header">
                <h3>placeholder</h3>
            </div>
            <div className="sidebar-search">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <ul className="sidebar-menu">
                {filteredItems.map((item) => {
                    if (item.type === 'submenu') {
                        return (
                            <li className="sidebar-item-mod" key={item.name} onClick={handleSubMenuToggle}>
                                {item.name}
                                {showSubMenu && (
                                    <ul className="sidebar-submenu">
                                        {item.subItems.map((subItem) => (
                                            <li
                                                className="sidebar-item"
                                                key={subItem}
                                                onClick={() => handleItemClick(subItem)}
                                            >
                                                {subItem}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        );
                    }
                    return (
                        <li
                            className="sidebar-item"
                            key={item.name}
                            onClick={() => handleItemClick(item.name)}
                        >
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideBar;