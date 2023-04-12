import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FORBIDDEN_CHAR } from "../config/general";
import { removeHtmlCharCode } from "../utils/stringUtils";

export const SearchBar = ({ keywords }) => {
  const [currentKeywords, setCurrentKeywords] = useState(
    keywords ? removeHtmlCharCode(keywords) : ""
  );
  const navigate = useNavigate();

  const handleSearchRequest = (e) => {
    e.preventDefault();
    navigate(`/search/${currentKeywords}`);
  };

  const changeKeywords = (e) => {
    const newValue = e.target.value;
    const lastChar = newValue[newValue.length - 1];

    if (FORBIDDEN_CHAR.includes(lastChar)) {
      return;
    }

    setCurrentKeywords(newValue);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchRequest}>
        <label className="hidden" htmlFor="main-search-bar">
          Search
        </label>
        <i className="search-bar__icon fas fa-search" />
        <input
          required
          type="text"
          name="main-search-bar"
          id="home-search-bar"
          placeholder="Trainers, Holy Light, Thrall, Mulgore, Teebu's Blazing Longsword ..."
          value={currentKeywords}
          onChange={changeKeywords}
          minLength={3}
        />
      </form>
    </div>
  );
};
