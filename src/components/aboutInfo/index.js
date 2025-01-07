import "./styles.css";
import { useTranslation } from "react-i18next";
import CodingTs from "../../assets/codingTs.svg";

function AboutInfo() {
  const { t } = useTranslation();
  return (
    <div className="aboutInfo__cont">
      <figure>
        <img src={CodingTs} alt="coder" />
      </figure>
      <section className="userBio">
        <h2 className="userBio__title">{t("aboutInfo.fullname")}</h2>
        <article className="userBio__subtitle">
          <p>{t("aboutInfo.role")}</p>
          <p>{t("aboutInfo.text1")}</p>
          <p>{t("aboutInfo.text2")}</p>
          <p>{t("aboutInfo.text3")}</p>
        </article>
        <a className="userBio__email" href="mailto: borrikon@gmail.com">
          {t("aboutInfo.email")}
        </a>
      </section>
    </div>
  );
}

export default AboutInfo;
