import React from 'react';

const SearchInput = ({ searchTerm, onSearchChange }) => {
    return (
        <input
            type="text"
            placeholder="Search ToDo"
            value={searchTerm}
            onChange={onSearchChange}
        />
    );
};


export default SearchInput;
