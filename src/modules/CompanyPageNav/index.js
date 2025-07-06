import { useState } from "react";
import "./CompanyPageNav.scss";

const CompanyPageNav = () => {
  const [activeItem, setActiveItem] = useState(1);
  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  return (
    <nav
      className="page-nav"
      role="navigation"
      aria-label="Navegación principal"
    >
      <ul className="page-nav-list">
        <li
          role="button"
          className={`page-nav-item ${
            activeItem === 0 ? "page-nav-item__current" : ""
          }`}
          onClick={() => handleItemClick(0)}
        >
          Summary
        </li>
        <li
          role="button"
          className={`page-nav-item ${
            activeItem === 1 ? "page-nav-item__current" : ""
          }`}
          onClick={() => handleItemClick(1)}
        >
          Financials
        </li>

        <li
          role="button"
          className={`page-nav-item ${
            activeItem === 2 ? "page-nav-item__current" : ""
          }`}
          onClick={() => handleItemClick(2)}
        >
          Peers
        </li>
        <li
          role="button"
          className={`page-nav-item ${
            activeItem === 3 ? "page-nav-item__current" : ""
          }`}
          onClick={() => handleItemClick(3)}
        >
          Company info
        </li>
        <li
          role="button"
          className={`page-nav-item ${
            activeItem === 4 ? "page-nav-item__current" : ""
          }`}
          onClick={() => handleItemClick(4)}
        >
          News and events
        </li>
      </ul>
    </nav>
  );
};

export default CompanyPageNav;
