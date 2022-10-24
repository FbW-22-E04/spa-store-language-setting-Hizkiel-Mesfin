import "../App.css";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const trans = [
  { lang: "english", word: "Hello World!" },
  { lang: "turkish", word: "Selam Dünya!" },
  { lang: "german", word: "Hallo Welt!" },
  { lang: "spanish", word: "Hola Mundo!" },
  { lang: "italian", word: "Ciao Mondo!" },
  { lang: "french", word: "Bonjour le monde!" },
  { lang: "norwegian", word: "Hei Verden!" },
];

const WelcomeMessage = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div>
      {trans.map((el, idx) => {
        return lang === el.lang ? <h1 key={idx}> {el.word} </h1> : "";
      })}
    </div>
  );
};

export default WelcomeMessage;
