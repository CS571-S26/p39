import React from 'react';

const SearchBar = (props) => {
    return (
        <div>
            <input
        type="text"
        placeholder="Search artworks..."
        value={props.searchQuery}
        onChange={props.handleSearchChange}
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '20px',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '5px'
        }}
      />
        </div>
    );
};

export default SearchBar;