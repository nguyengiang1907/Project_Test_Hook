import React, { useState } from 'react';
import SearchInput from './SearchInput';
import FilteredItems from './FilteredItems';

// Sample list of items
const items = [
  'Apple',
  'Banana',
  'Orange',
  'Pineapple',
  'Mango',
  'Strawberry',
  'Grapes',
  'Watermelon',
];

const SearchFilter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div>
      <h2>Search Filter</h2>
      <SearchInput searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      {searchQuery && <FilteredItems items={items} searchQuery={searchQuery} />}
    </div>
  );
};

export default SearchFilter;
