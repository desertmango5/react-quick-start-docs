import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search">
        <form className="search__box">
          <input 
            type="text"
            placeholder="Search..."
            className="search__input"
          />
        </form>
        <label className="inStock">
          <input
            name="isInStock"
            type="checkbox"
            className="inStock__input"
          />
          Only show products in stock
        </label>
      </div>
    );
  }
}

export default SearchBar;
