import '../styles/Recommendation.css';

const Recommendation = () => {
    
    const currentMonth = new Date().getMonth();
    /** On a un booléen ici, qui correspond au printemps
     * Raisonnement mois doit être PLUS GRAND QUE 2 ==> mois de MARS
     * ET mois doit être PLUS PETIT QUE 5 (avant le mois de juin car il peut être = à 5) */
    const isSpring = currentMonth >= 2 && currentMonth <= 5;

    /** Ici on a utiliser un "if" mais on aurait pu utiliser un "switch" */
    if(!isSpring) {
        return (<p className="lmj-banner-text">Ce n'est plus le moment de remporter !!!</p>)
    }
    return (<p className="lmj-banner-text">C'est le printemps, rempotez ! 🌿</p>)
}

export default Recommendation;