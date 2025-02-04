import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); 
        
        const inpValue = inputValue.trim();

        if(inpValue.length <= 1) return;

        onNewCategory(inpValue);
        //setCategories((category) => [...category,inputValue]);
        setInputValue('');
    }

  return (
    <form onSubmit={  onSubmit } >
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={ (event) => onInputChange(event) }
        />
    </form>
  )
}
