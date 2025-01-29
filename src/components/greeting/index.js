import "./styles.css";
import { Link as LinkScrool } from "react-scroll";
import doc_en from "../../documents/CV_Borys_Ushnevych_en.pdf";
import doc_de from "../../documents/CV_Borys_Ushnevych_de.pdf";
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
          href={doc_en}
          download="JuniorFrontEndDevCV"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn btn-secondary btn-secondary--download">
            <img src={Download} alt="" />
            {t("greeting.download_en")}
          </button>
        </a>
        <a
          href={doc_de}
          download="JuniorFrontEndDevCV"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn btn-secondary btn-secondary--download">
            <img src={Download} alt="" />
            {t("greeting.download_de")}
          </button>
        </a>
      </div>
    </div>
  );
}

export default Greeting;
