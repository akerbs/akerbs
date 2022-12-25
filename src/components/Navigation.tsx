import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="App-nav">
      <Link to="/" className="header-link">
        home
      </Link>

      <Link to="/portfolio" className="header-link">
        portfolio
      </Link>

      <Link to="/contact" className="header-link">
        contact
      </Link>
    </nav>
  );
};

export default Navigation;
