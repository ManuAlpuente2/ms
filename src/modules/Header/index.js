import { ReactComponent as Logo } from "../../assets/img/logo-manu.svg";
import "./Header.scss";
import Navigation from "../../components/Navigation";
import Search from "../../components/Search";
import CardUser from "../../components/CardUser";

const Header = () => {
  return (
    <div className="header">
      <div className="container header_container">
        <div className="header_start">
          <Logo
            className="logo header__logo"
            alt="Manu Alpuente"
            title="Manu Alpuente"
          />
          <Navigation />
        </div>
        <div className="header_end">
          <Search />
          <CardUser />
        </div>
      </div>
    </div>
  );
};

export default Header;
