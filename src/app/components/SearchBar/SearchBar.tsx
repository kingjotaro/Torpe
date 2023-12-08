'use client'
import React, { useState } from 'react';
import { ISearchBar, IMockData } from './types';
import { mockData } from './mock';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredData, setFilteredData] = useState<IMockData[]>([]);

  const handleSearch = (event: ISearchBar) => {
    const input = event.target.value;
    setSearchTerm(input);

    const regexPattern = new RegExp(`^${input.substring(0, 3)}`, 'i');
    const newFilteredData = mockData.filter((item) => regexPattern.test(item.name));
    setFilteredData(newFilteredData);

    console.log(newFilteredData);
  };

  return (
    <div className="flex justify-between space-x-2 flex-col">
      <input
        type="text"
        placeholder="Digite sua pesquisa"
        className="p-2 border border-gray-300 rounded"
        onChange={handleSearch}
      />
     
      <div>
        {filteredData.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;