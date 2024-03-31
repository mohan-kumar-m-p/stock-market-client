import React from 'react';

function SearchInput({ placeholder, callback }) {

    const setSearch = (event) => {
        callback(event.target.value);
    }

    return (
        <input type="text"
            className="bg-white border-none focus:outline-gray rounded-md text-gray-800 text-lg p-1"
            placeholder={placeholder || " Search here..."} // Simplified defaulting using ||
            onChange={setSearch}
        />
    );
}

export default SearchInput