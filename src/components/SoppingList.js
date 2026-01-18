/********************************/
/* Notre 3eme composant est créé */
/********************************/

/** Si on fait :
 * import '../datas/plantList.js'
 * ==> on exécute le fichier
 * ==> On IMPORTE PAS LES DONNEES !!!
 */

import '../styles/ShoppingList.css';
import { plantList } from '../datas/plantList';

/** Reduce( ) me permet de créer le nouveau tableau qui vient de la DB */
/** acc = nouveau tableau que l'on va créer au fur et à mesure */
/** Tableau avec juste 1 fois le nom de chaque catégorie  */ 
const categories = plantList.reduce((acc, plant) => {
    /** Si la catégorie est déjà dans l'accumulateur, tu fais rien */
    if(acc.includes(plant.category)) {
        /** Si la catégorie est déjà dans l'accumulateur, tu fais rien */
        return acc
    } else {
        /** Sinon on la rajoute */
        /** concat permet de ne pas modifier le tableau de départ ou ajoute ou pas une donnée au tableau */
        return acc.concat(plant.category);
    }
}, []);
/** ici on va ajouter le composant lui-même */
/** Map() affiche le tableau */
const ShoppingList = () => {
    return (
        <div className='lmj-shopping-list'>
            <ul className='lmj-plant-list-category'>
                {categories.map(cat => 
                    <li key={cat} className='lmj-plant-category'>{cat}</li>
                )}
            </ul>
            <ul className='lmj-plant-list'>
                { plantList.map(plant =>
                    <li key={`${plant.id}`} className='lmj-plant-item'>
                        {plant.name} 
                        {plant.isBestSale && <span className='lmj-plant-bestSale'>Nos meilleures ventes 🔥</span>}
                        {plant.isSpecialOffer ? <span className='lmj-plant-specialOffer'>Plantes en soldes 💥</span> : null}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default ShoppingList;