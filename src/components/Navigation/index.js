import "./Navigation.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  let location = useLocation();

  return (
    <nav
      className="navigation"
      role="navigation"
      aria-label="Navegación principal"
    >
      <ul className="navigation_list">
        <li
          className={`navigation_item ${
            location.pathname === "/" ? "navigation_item__current" : ""
          }`}
        >
          <Link to="/lists" className="navigation_link">
            Dashboard
          </Link>
        </li>
        <li
          className={`navigation_item ${
            location.pathname === "/explorer" ? "navigation_item__current" : ""
          }`}
        >
          <Link to="/lists" className="navigation_link">
            Explorer
          </Link>
        </li>
        <li
          className={`navigation_item ${
            location.pathname.includes("/companies/")
              ? "navigation_item__current"
              : ""
          }`}
        >
          <Link to="/companies/0" className="navigation_link">
            Companies
          </Link>
        </li>
        <li
          className={`navigation_item ${
            location.pathname === "/microsectors"
              ? "navigation_item__current"
              : ""
          }`}
        >
          <Link to="/lists" className="navigation_link">
            Microsectors
          </Link>
        </li>
        <li
          className={`navigation_item ${
            location.pathname === "/lists" ? "navigation_item__current" : ""
          }`}
        >
          <Link to="/lists" className="navigation_link">
            Lists
          </Link>
        </li>
        <li
          className={`navigation_item ${
            location.pathname === "/analysis" ? "navigation_item__current" : ""
          }`}
        >
          <Link to="/lists" className="navigation_link">
            Analysis
            <span className="navigation_link_badge">Beta</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
