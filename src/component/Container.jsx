import React, { useState, useEffect } from 'react';
import Overview from './Pages/Overview.jsx';
import Analytics from './Pages/Analytics.jsx';
import Products from './Pages/Products.jsx';
import Tags from './Pages/Tags.jsx';
import Members from './Pages/Members.jsx';
import Inquiries from './Pages/Inquires.jsx'; // Ensure the file exists and has the correct extension



const Container = ({ inPutItem }) => {
    console.log('Input Item from Container:', inPutItem); // Log the input item to the console

    const [activePage, setActivePage] = useState('Overview'); // Default to 'Overview'

    useEffect(() => {
        if (inPutItem && inPutItem !== 'Overview') {
            setActivePage(inPutItem);
        }
    }, [inPutItem]);

    const renderContent = () => {
        switch (activePage) {
            case 'Overview':
                return <Overview />;
            case 'Analytics':
                return <Analytics />;
            case 'Products':
                return <Products />;
            case 'Tags+':
                return <Tags />;
            case 'Members':
                return <Members />;
            case 'Inquiries':
                return <Inquiries />;
            default:
                return <h1>Page not found </h1>;
        }
    };

    return (
        <div>
            {renderContent()}
        </div>
    );
};

export default Container;