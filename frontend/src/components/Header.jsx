import { useLocation } from "react-router-dom";
import {
  getActualPageNameFromWindowPath,
  getKeywordsFromWindowPath,
} from "../utils/stringUtils";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  const location = useLocation();
  let keywords = "";

  if (location.pathname === "/") {
    return;
  }

  if (getActualPageNameFromWindowPath(location.pathname) === "search") {
    keywords = getKeywordsFromWindowPath(location.pathname);
  }

  return (
    <header className="header">
      <Logo />
      <SearchBar keywords={keywords} />
      <nav></nav>
    </header>
  );
};
