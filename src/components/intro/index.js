import "./styles.css";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/arrowRight.svg";
import { useTranslation } from "react-i18next";
import CodingTs from "../../assets/codingTS1.svg";

function Intro() {
  const { t } = useTranslation();
  return (
    <div className="intro__container">
      <figure>
        <img src={CodingTs} alt="the worker" />
        <figcaption className="offscreen">{t("intro.figcaption")}</figcaption>
      </figure>
      <div className="intro__info">
        <h2 className="info__intro--title">{t("intro.title")}</h2>
        <div className="info__intro--subtitle">
          <p>{t("intro.subtitle")}</p>
        </div>
        <Link to="/about">
          <button className="btn btn-secondary btn-secondary--link">
            {t("intro.link")}
            <img src={arrowRight} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
