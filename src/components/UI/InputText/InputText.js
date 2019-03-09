import React from 'react';

// import classes from './InputText.module.css';

const inputText = (props) => {
    return (
        <input 
            type="text" 
            autoFocus={props.autofocus} 
            onKeyUp={props.keyup} 
            className={props.className} 
            defaultValue={props.dfValue} 
            onBlur={props.blured} 
            placeholder={props.placeholder}/>
    )
};

export default inputText;