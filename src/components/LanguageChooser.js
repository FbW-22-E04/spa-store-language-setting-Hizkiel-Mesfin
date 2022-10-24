import { LanguageContext } from "../contexts/LanguageContext";
import { useContext } from "react";

const LanguageChooser = () => {
  const { handleChange } = useContext(LanguageContext);
  return (
    <div>
      <h3>Please select your language</h3>
      <select onChange={handleChange} name="language" id="lang">
        <option value="">please choose a language</option>
        <option value="english">🇺🇸English</option>
        <option value="turkish">🇹🇷Turkish</option>
        <option value="german">🇩🇪German</option>
        <option value="spanish">🇪🇸Spanish</option>
        <option value="italian">🇳🇱Italian</option>
        <option value="french">🇫🇷French</option>
        <option value="norwegian">🇮🇷Norwegian</option>
      </select>
    </div>
  );
};

export default LanguageChooser;
