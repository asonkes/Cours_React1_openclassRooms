/********************************/
/* Notre 2eme composant est créé */
/********************************/

import '../styles/Cart.css';

const Cart = () => {
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const flowersPrice = 15;
    const total = monsteraPrice + lierrePrice + flowersPrice;

    return (
        <div className="lmj-cart">
            <div>
                <h2>Panier</h2>
                <ul>
                    <li>Monstera : { monsteraPrice } €</li>
                    <li>Lierre: { lierrePrice } €</li>
                    <li>Bouquet de Fleurs : { flowersPrice } €</li>
                </ul>
            </div>
            <div>Total des achats : { total } €</div>
        </div>
    )
}

export default Cart;