import React from 'react';


export function TodoItem({todo}){
    const { task, desc} = todo;

    return (
        <div className='m-3'>
            <a>
            <button className="bi bi-x-lg"></button>
                 <li >
                    <h2>{task}</h2>
                    <p>{desc}</p>
                </li>
            </a>
        </div>
    );
}