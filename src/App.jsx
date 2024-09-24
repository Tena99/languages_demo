import { useState } from "react";
import "./App.css";

function App() {
  // State for the selected language
  const [language, setLanguage] = useState("English");
  // State for login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Text content for each language
  const translations = {
    English: {
      title: "React State Exercise",
      welcomeUser:
        "Welcome to your profile page, Ralf, have fun with our website.",
      welcomeGuest:
        "Welcome to the React state website. Log in to see state in action.",
      loginAsRalf: "Log in as Ralf",
      logout: "Log out",
      switchToEnglish: "Switch to English",
      switchToGerman: "Switch to German",
    },
    German: {
      title: "React-Stat-Übung",
      welcomeUser:
        "Willkommen auf deiner Profilseite, Ralf, viel Spaß auf unserer Website.",
      welcomeGuest:
        "Willkommen auf der React-State-Website. Logge dich ein, um State in Aktion zu sehen.",
      loginAsRalf: "Melde dich als Ralf an",
      logout: "Abmelden",
      switchToEnglish: "Wechseln Sie zu Englisch",
      switchToGerman: "Wechseln Sie zu Deutsch",
    },
  };

  // Get the correct language text
  const t = translations[language];

  // We are making destructuring here by using [language] and we receive "English" or "German" as value

  // Depending on language we receive an object with the following structure:

  //   {
  //     "title": "React State Exercise",
  //     "welcomeProfile": "Welcome to your profile page, Ralf, have fun with our website.",
  //     "welcomeSite": "Welcome to the React state website. Log in to see state in action.",
  //     "loginAsRalf": "Log in as Ralf",
  //     "logout": "Log out",
  //     "switchToEnglish": "Switch to English",
  //     "switchToGerman": "Switch to German"
  // }

  return (
    <div className="App">
      <h1>{t.title}</h1>

      {/* Display the welcome message based on login status */}
      <p>{isLoggedIn ? t.welcomeUser : t.welcomeGuest}</p>

      <div className="button-container">
        <div className="left-column">
          <button onClick={() => setLanguage("English")}>
            {t.switchToEnglish}
          </button>
          <button onClick={() => setLanguage("German")}>
            {t.switchToGerman}
          </button>
        </div>

        <div className="right-column">
          <button onClick={() => setIsLoggedIn(true)}>{t.loginAsRalf}</button>
          <button onClick={() => setIsLoggedIn(false)}>{t.logout}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
