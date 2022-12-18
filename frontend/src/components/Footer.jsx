import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

  if (location.pathname !== "/") {
    return;
  }

  return (
    <footer className="footer">
      <p>
        Made by <a href="https://github.com/geo-tp">Geo </a> for{" "}
        <a href="https://github.com/The-Alpha-Project">The Alpha Project</a> -{" "}
        {new Date().getFullYear()} Alpha Project Crawler - Image assets
        copyright{" "}
        <a href="https://www.blizzard.com/en-us/legal/c1ae32ac-7ff9-4ac3-a03b-fc04b8697010/blizzard-legal-faq">
          Blizzard Entertainment, Inc.
        </a>
      </p>
    </footer>
  );
};
