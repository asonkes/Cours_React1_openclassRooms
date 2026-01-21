/********************************/
/* Notre 2eme composant est créé */
/********************************/

import { useState } from "react";
import "../styles/Cart.css";

const Cart = () => {
  const monsteraPrice = 8;
  /** Donc ici, on va créer un state "cart" */
  /** Mais qd on fait cela, on doit déclarer une fonction
   * pour mettre ce "state" à jour et lui attribuer
   * une valeur initiale de "0"
   **/
  const [cart, updateCart] = useState(0);

  /** Variable qui permettra de définir si on veut afficher ou pas le panier */
  /** Par défaut ==> false */
  const [isOpen, setIsOpen] = useState(false);

  /** Le bouton permet d'ajouter un 'monstera' */
  /** Evenement au 'click' */
  /** Et tu mets à jour grêce à adapte la quantité de monstera que tu veux
   * (en fonction ) du nombre de plantes ajoutées dans le panier */

  /** Pour ce bouton : <button onClick={() => updateCart(0)}>Vider le panier</button> */
  /** En fait, on remet simplement à l'état initial ==> "0" */
  return isOpen ? (
    <div className="lmj-cart">
      <button onClick={() => setIsOpen(false)}>Fermer</button>
      <h2>Panier</h2>
      <div>
        <div>
          <li>Monstera : {monsteraPrice} €</li>
          <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
          <button onClick={() => updateCart(0)}>Vider le panier</button>
        </div>
      </div>
      <h3>Total ={monsteraPrice * cart} €</h3>
    </div>
  ) : (
    <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
  );
};

export default Cart;
