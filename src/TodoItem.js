import React from 'react';

function TodoItem(props){
    return (
        //por cada todo vamos a renderizar 
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
            // <TodoItem/>

          //por cada uno de lso todos podamos renderizar todoitem
    )
};

export {TodoItem};