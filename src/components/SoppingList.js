/********************************/
/* Notre 3eme composant est créé */
/********************************/

/** Si on fait :
 * import '../datas/plantList.js'
 * ==> on exécute le fichier
 * ==> On IMPORTE PAS LES DONNEES !!!
 */
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
        <div>
            <ul>
                {categories.map(cat => 
                    <li key={cat}>{cat}</li>
                )}
            </ul>
            <ul>
                { plantList.map(plant =>
                    <li key={`${plant.id}`}>{plant.name}</li>
                )}
            </ul>
        </div>
    );
}

export default ShoppingList;

/** Avec l'API
 * Cela donnera :
 * <li key={plant.id}>{plant.name}</li>
 */