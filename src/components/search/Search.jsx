import { useState } from 'react';
import './Search.css';

export const Search = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const handleChange = ({ target: { value } }) => {
        setInputValue(value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the page from reloading
        const formattedInput = inputValue.trim().toLowerCase();
        if (formattedInput.length <= 1) return;
        // Convert from lowercase all word, to capitalize only the first letter
        onNewCategory(convertToTitleCase(formattedInput));
        setInputValue("");
    }

    const convertToTitleCase = (str) => {
        return str.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    )
}
