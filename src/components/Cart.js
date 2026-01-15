const Cart = () => {
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const flowersPrice = 15;
    const total = monsteraPrice + lierrePrice + flowersPrice;

    return (
        <div>
            <div>
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