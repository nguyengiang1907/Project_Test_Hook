import React from 'react';

interface SearchInputProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search items..."
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)} 
      style={{ padding: '8px', fontSize: '16px', marginBottom: '10px', width: '300px' }}
    />
  );
};

export default SearchInput;
