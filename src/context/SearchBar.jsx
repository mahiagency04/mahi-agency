import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import searchbarCSS from "./SearchBar.module.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
   const wrapperRef = useRef(null);

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions(filtered.slice(0, 6));
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setSuggestions([]);
  };

  return (
    <div className={searchbarCSS.searchWrapper} ref={wrapperRef}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      {suggestions.length > 0 && (
        <ul className={searchbarCSS.suggestionBox}>
          {suggestions.map((item) => (
            <li
              key={item.productId}
              onClick={() => {
                navigate(`/product/${item.productId}`);
                setQuery("");
                setSuggestions([]);
              }}
            >
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <span>₹{item.price}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
