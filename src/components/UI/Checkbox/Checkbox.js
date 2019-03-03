import React from 'react';

const checkbox = (props) => (
    <input 
        type="checkbox" 
        onChange={props.changed} 
        className={props.className} 
        title={props.title} 
        defaultChecked={props.isChecked}/>
);

export default checkbox;