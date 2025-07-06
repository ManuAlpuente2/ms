import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo-manu.svg";
import { ReactComponent as LogoMobile } from "../../assets/img/logo-manu--mobile.svg";
import "./Header.scss";
import Navigation from "../../components/Navigation";
import Search from "../../components/Search";
import CardUser from "../../components/CardUser";
import Button from "../../components/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div
        className={`header header--mobile ${isMenuOpen ? "header--open" : ""}`}
      >
        <div className="header_left">
          <div className="card-user">
            <div className="avatar">MA</div>
          </div>
        </div>
        <div className="header_center">
          <Link to="/lists">
            <LogoMobile
              className="logo header__logo"
              alt="Manu Alpuente"
              title="Manu Alpuente"
            />
          </Link>
        </div>
        <div className="header_right">
          <Button
            className="button button--icon"
            icon="dots"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="icon icon-dots"></i>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="header-mobile-menu">
          <div className="header-mobile-menu_header">
            <Button
              className="button button--icon"
              icon="close"
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="icon icon-close"></i>
            </Button>
          </div>
          <div className="header-mobile-menu_content">
            <Search />
            <Navigation />
            <CardUser />
          </div>
        </div>
      )}
      <div className="header header--desktop">
        <div className="container header_container">
          <div className="header_start">
            <Link to="/lists">
              <Logo
                className="logo header__logo"
                alt="Manu Alpuente"
                title="Manu Alpuente"
              />
            </Link>
            <Navigation />
          </div>
          <div className="header_end">
            <Search />
            <CardUser />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
