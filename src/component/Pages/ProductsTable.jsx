import React from 'react';
import Table from '../Tabel.jsx';    
import productData from '../../data/Products/Products.js'; // Ensure the path is correct

const Products = () => {
    const columns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Name', accessor: 'name' },
        { header: 'Category', accessor: 'category' },
        { header: 'Price', accessor: 'price' },
        { header: 'Stock', accessor: 'stock' },
        { header: 'Description', accessor: 'description' },
        { header: 'Image', accessor: 'image', type: 'image' }, // Add type: 'image' for the Image column
    ];

    const data = productData;

    return (
        <>
            <h1>Products</h1>
            <Table columns={columns} data={data} />
        </>
    );
};

export default Products;