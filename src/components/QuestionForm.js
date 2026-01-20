import { useState } from 'react';

const QuestionForm = () => {

    const [inputValue, setInputValue] = useState('Posez votre question ici');

    return (
        <div>
            <textarea
                value = {inputValue}
                onChange = {(event) => setInputValue(event.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )
}

export default QuestionForm;