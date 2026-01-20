import CareScale from "./CareScale";
import '../styles/PlantItem.css';
import '../styles/ShoppingList.css';

const handleClick = (plantName) => {
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix!!!`);
}

const PlantItem = ({name, cover, light, water, isBestSale, isSpecialOffer}) => {
    
    // Pas de key ici, on met la "key", là où la liste est créé (où on fait le map)
    return (
        <li className='lmj-plant-item' onClick={() => handleClick(name)}>
            <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`}/>
            {isBestSale && <span className='lmj-plant-bestSale'>Nos meilleures ventes 🔥</span>}
            {isSpecialOffer ? <span className='lmj-plant-specialOffer'>Plantes en soldes 💥</span> : null}
            <CareScale careType='water' scaleValue={water} className="lmj-plant-water"/>
            <CareScale careType='light' scaleValue={light} className="lmj-plant-light"/>
        </li>  
    )
}

export default PlantItem;

