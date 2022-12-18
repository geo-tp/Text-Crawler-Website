import { Logo } from "../components/Logo";
import { SearchBar } from "../components/SearchBar";
import { CenteredContainer } from "../containers/CenteredContainer";
import { Link, Navigate, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchRequest = (e, keywords) => {
    e.preventDefault();

    navigate(`/search/${keywords}`);
  };

  return (
    <div className="homepage">
      <CenteredContainer>
        <Logo />
        <SearchBar handleSearchRequest={handleSearchRequest} />
        <h1 className="homepage__info">
          Deep search over tons of World of Warcraft pre release texts from
          various <Link to="/sources">sources</Link>
        </h1>
      </CenteredContainer>
    </div>
  );
};
