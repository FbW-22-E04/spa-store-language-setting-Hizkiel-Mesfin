import { createContext, useState } from "react";

export const LanguageContext = createContext();

export default function LanguageContextProvider({ children }) {
  const [lang, setLang] = useState();

  const handleChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <LanguageContext.Provider value={{ lang, handleChange }}>
      {children}
    </LanguageContext.Provider>
  );
}
