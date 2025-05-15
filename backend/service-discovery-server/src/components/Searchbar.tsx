import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <Search className="search-input-icon" />
        <input type="text" className="search-input" placeholder="Search events.." />
      </div>
      <select className="category-dropdown">
        <option value="all">All Categories</option>
        <option value="tech">Tech</option>
        <option value="music">Music</option>
        <option value="business">Business</option>
        <option value="art">Art</option>
        <option value="sports">Sports</option>
      </select>
    </div>
  );
};

export default SearchBar; 