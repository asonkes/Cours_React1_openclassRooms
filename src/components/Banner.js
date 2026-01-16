/********************************/
/* Notre 1er composant est créé */
/********************************/
import '../styles/Banner.css';
import logo from '../assets/logo.png';

const Banner = () => {
    return (
        <div className="lmj-banner">
            <img src={logo} alt="la maison jungle" className='lmj-logo'></img>
            <h1 className="lmj-title">La maison jungle</h1>
        </div>
        )}

export default Banner;