import React from 'react';

const DeleteButton = ({ onDelete, id}) => {
    return (
        <button onClick={() => { 
            onDelete(id); 
        }} style={styles.button}>
            Delete
        </button>
    );
};

const styles = {
    button: {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default DeleteButton;