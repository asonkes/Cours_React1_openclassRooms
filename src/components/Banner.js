/********************************/
/* Notre 1er composant est créé */
/********************************/
import '../styles/Banner.css';
import logo from '../assets/logo.png';
import '../components/Recommendation';
import Recommendation from '../components/Recommendation';

const Banner = () => {
    const title = "La maison jungle";
    /** On récupère le mois de l'année avec 'currentMonth' */

    return (
        <div className="lmj-banner">
            <div className='lmj-banner-row'>
                <img src={logo} alt="la maison jungle" className='lmj-logo'></img>
                <h1 className="lmj-title">{ title }</h1>
            </div>
            <Recommendation/>
        </div>
        )}

export default Banner;