import "./styles.css";
import { Link as LinkScrool } from "react-scroll";
import doc from "../../documents/CV_Frontend_dev_2025.pdf";
import Download from "../../assets/download.svg";
import { useTranslation } from "react-i18next";

function Greeting() {
  const { t } = useTranslation();
  return (
    <div className="greeting">
      <h1 className="greeting__title">
        {t("greeting.title1")}
        <span>{t("greeting.name")}</span>
      </h1>
      <h2 className="greeting__subtitle">{t("greeting.subtitle")}</h2>
      <h4>{t("greeting.welcome")}</h4>
      <div className="btn-container">
        <button className="btn btn-primary">
          <LinkScrool to="projects" smooth={true}>
            {t("greeting.goto")}
          </LinkScrool>
        </button>
        <a
          href={doc}
          download="JuniorFrontEndDevCV"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn btn-secondary btn-secondary--download">
            <img src={Download} alt="" />
            {t("greeting.download")}
          </button>
        </a>
      </div>
    </div>
  );
}

export default Greeting;
