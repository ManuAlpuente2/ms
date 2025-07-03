import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav
      className="navigation"
      role="navigation"
      aria-label="Navegación principal"
    >
      <ul className="navigation_list">
        <li className="navigation_item">
          <a href="/" className="navigation_link" aria-current="page">
            Dashboard
          </a>
        </li>
        <li className="navigation_item">
          <a href="" className="navigation_link">
            Explorer
          </a>
        </li>
        <li className="navigation_item navigation_item__current">
          <a href="" className="navigation_link">
            Companies
          </a>
        </li>
        <li className="navigation_item">
          <a href="" className="navigation_link">
            Microsectors
          </a>
        </li>
        <li className="navigation_item">
          <a href="" className="navigation_link">
            Lists
          </a>
        </li>
        <li className="navigation_item">
          <a href="" className="navigation_link">
            Analysis
            <span className="navigation_link_badge">Beta</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
