import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import "./i18n";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero"; 
import { Projectos } from "./components/Projectos";

function App() {
  const { t } = useTranslation();
  return (
    <>
    
      <NavBar />
      <Hero />
      <Projectos />
      
    </>
  );
}

export default App;
