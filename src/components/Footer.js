import { useState } from "react";

const Footer = () => {

    const [inputValue, setInputValue] = useState('');

    return(
        <footer className='lmj-footer'>
            <input
                value = {inputValue}
                blur = { (event) => setInputValue(event.target.value) }
            />
        </footer>
    )

}

export default Footer;