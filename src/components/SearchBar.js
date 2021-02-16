import React, { useState } from 'react';

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();

    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <input
            type="text"
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
            }}
            placeholder="Search Video"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
