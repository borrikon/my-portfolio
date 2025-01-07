import "./styles.css";
import "../../index.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { useTranslation } from "react-i18next";
import LngSwitcher from "../lngSwitcher";

function Header() {
  const { t } = useTranslation();
  return (
    <div className="header">
      <figure className="header__logo">
        <img src={logo} alt="logo" />
        <figcaption className="offscreen">{t("header.logoalt")}</figcaption>
      </figure>
      <section className="header__menu">
        <nav className="header__nav">
          <NavLink
            to="/my-portfolio"
            className="header__link"
            activeclassname="header__link active"
          >
            {t("header.main")}
          </NavLink>
          <NavLink
            to="/about"
            className="header__link"
            activeclassname="header__link active"
          >
            {t("header.about")}
          </NavLink>
          <LngSwitcher />
        </nav>
      </section>
    </div>
  );
}
export default Header;
