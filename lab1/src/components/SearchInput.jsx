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

// Додаємо експорт за замовчуванням
export default SearchInput;
