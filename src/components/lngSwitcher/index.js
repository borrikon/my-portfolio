import "./styles.css";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../locale/lng";
function LngSwitcher() {
  const { i18n, t } = useTranslation();

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };

  return (
    <select
      className="lng_select"
      defaultValue={i18n.language}
      onChange={onChangeLang}
    >
      {LANGUAGES.map(({ code, label }) => (
        <option key={code} value={code}>
          {t(label)}
        </option>
      ))}
    </select>
  );
}

export default LngSwitcher;
