import "./styles.css";
import PhotoPersonal from "../../assets/PhotoPersonal.jpg";
import { useTranslation } from "react-i18next";

function AboutInfo() {
  const { t } = useTranslation();
  return (
    <div className="aboutInfo__cont">
      <figure>
        <img src={PhotoPersonal} alt="me" />
        <figcaption className="offscreen">
          {t("aboutInfo.figcaption")}
        </figcaption>
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
