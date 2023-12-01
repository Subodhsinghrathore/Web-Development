import React, { useState } from 'react';
import './SearchCard.css'; 

const data = [
  { id: 1, name: 'Rajesh Sinha', age: 25, occupation: 'Developer', city: 'New York' },
  { id: 2, name: 'Utkarsh Kumar', age: 30, occupation: 'Designer', city: 'San Francisco' },
  { id: 3, name: 'Raj Singh', age: 27, occupation: 'Marketing Manager', city: 'Los Angeles' },
  { id: 4, name: 'Lukeshwar pratap', age: 32, occupation: 'Data Analyst', city: 'Chicago' },
  { id: 5, name: 'Subham sharma', age: 29, occupation: 'Product Manager', city: 'Seattle' },
  { id: 6, name: 'Omkar tripathi', age: 26, occupation: 'Software Engineer', city: 'Boston' },
  { id: 7, name: 'Santosh kumar', age: 31, occupation: 'UI/UX Designer', city: 'Austin' },
  { id: 8, name: 'Ujjwal sinha', age: 28, occupation: 'Financial Analyst', city: 'Miami' },
  { id: 9, name: 'Pranjal diwedi', age: 33, occupation: 'HR Specialist', city: 'Denver' },
];

const Card = ({ person }) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
    </div>
  );
};

const SearchCard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filtered = data.filter((person) =>
      person.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="SearchCard">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="card-container">
        {filteredData.map((person) => (
          <Card key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
};

export default SearchCard;
