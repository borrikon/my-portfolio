import "./styles.css";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.svg";
import Linked from "../../assets/Linked.svg";
import TelegramLogo from "../../assets/telegramLogo.svg";
import Gmail from "../../assets/Gmail.svg";
import GitHub from "../../assets/skills/github.svg";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <section className="footer__main">
        <figure className="footer__main--logo">
          <img src={Logo} alt="logo" />
          <figcaption className="offscreen">{t("footer.logoalt")}</figcaption>
        </figure>
        <div className="footer__main--linkCont">
          <h2>
            <Link to="/my-portfolio">{t("footer.main")}</Link>
          </h2>
        </div>
        <div className="footer__main--linkCont">
          <h2>
            <Link to="/about">{t("footer.about")}</Link>
          </h2>
        </div>
        <div className="footer__main--linkCont">
          <h2>{t("footer.social")}</h2>
          <div className="footer__main--social">
            <a
              href="https://www.linkedin.com/in/borrikon/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Linked} alt="" />
            </a>
            <a
              href="https://t.me/borka_jeweler"
              target="_blank"
              rel="noreferrer"
            >
              <img src={TelegramLogo} alt="" />
            </a>
            <a
              href="https://github.com/borrikon"
              target="_blank"
              rel="noreferrer"
            >
              <img src={GitHub} alt="" />
            </a>
            <a className="userBio__email" href="mailto: borrikon@gmail.com">
              <img src={Gmail} alt="" />
            </a>
          </div>
        </div>
      </section>
      <section className="footer__copy">
        <p>
          <span>&#169;</span>
          2025
        </p>
      </section>
    </div>
  );
}

export default Footer;
