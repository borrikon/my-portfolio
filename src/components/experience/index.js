import "./styles.css";
import { projectsInfo } from "../../helpers/projectsInfo";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();
  let projectItems = projectsInfo.map((el, i) => (
    <div key={el.title + i} className="projects__item">
      <figure className="projects__item--figure">
        <img src={el.img} loading="lazy" alt={t("projects.imgalt")} />
        <figcaption className="offscreen">{t(el.title)}</figcaption>
      </figure>
      <article className="projects__item--descr">
        <h4>{t(el.title)}</h4>
        <p>{t(el.descr)}</p>
      </article>
    </div>
  ));
  return (
    <div id="projects" className="experience__cont">
      <h2 className="experience__cont--title">{t("projects.title")}</h2>
      <section className="projects">{projectItems}</section>
    </div>
  );
}

export default Experience;
