import "./styles.css";
import { userSkillsData } from "../../helpers/userSkillsInfo";
import { useTranslation } from "react-i18next";

function AboutSkills() {
  const { t } = useTranslation();
  let itemList = userSkillsData.map((el, i) => (
    <div key={i + el.skill} className="skillItem">
      <div className="skillItemImgCont">
        {el.img.map((image) => (
          <img src={image} alt="" key={image} />
        ))}
      </div>
      <h4>{t(el.name)}</h4>
      <p>{t(el.description)}</p>
    </div>
  ));

  return (
    <div className="skillsCont">
      <h2 className="skillsCont__title">{t("skills.title")}</h2>
      <section className="skillItems__cont">{itemList}</section>
    </div>
  );
}

export default AboutSkills;
