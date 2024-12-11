import React from 'react';

interface FilteredItemsProps {
  items: string[];
  searchQuery: string;
}

const FilteredItems: React.FC<FilteredItemsProps> = ({ items, searchQuery }) => {
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ul>
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => <li key={index}>{item}</li>)
      ) : (
        <li>No items found</li>
      )}
    </ul>
  );
};

export default FilteredItems;
