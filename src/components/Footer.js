import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  /** Lien entre l'input et le state */
  /** Event => évènement */
  /** Target, lien entre l'évènement et l'élément HTML qui l'a déclenché */
  /** Sans 'target', impossible de savoir d'où vient l'event */
  /** impossible de lire la valeur */
  /** Impossible de réutiliser la même fonction ailleurs */
  /** ici c'est l'input */
  function handleInput(event) {
    setInputValue(event.target.value);
  }

  /** Validation au bon moment */
  /** Si la valeur ne contient pas '@' erreur */
  function handleBlur() {
    /** Si  */
    if (!inputValue.includes("@")) {
      alert("Attention, il n'y a pas d'@, ceci n'etspas une adresse valide 😥");
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <input
        placeholder="Entrez votre mail"
        /** On appelle la fonction qui sert à savoir la value de l'input */
        onChange={handleInput}
        /** Permet de récupérer la valeur mise dans l'input */
        value={inputValue}
        /** Déclenché quand l'utilisateur perd le focus */
        onBlur={handleBlur}
      />
    </footer>
  );
}

export default Footer;
