import React from 'react';

import classes from './InputText.module.css';

const inputText = (props) => (
    <input 
        type="text" 
        onKeyUp={props.keyup} 
        className={classes.InputText} 
        placeholder={props.placeholder}/>
);

export default inputText;