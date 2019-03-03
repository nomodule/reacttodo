import React from 'react';

const button = (props) => (
    <button 
        onClick={props.clicked} 
        className={props.className} 
        title={props.title}>{props.children}</button>
);

export default button;