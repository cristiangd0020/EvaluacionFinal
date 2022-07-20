import React, { Fragment } from 'react';


export function TodoItem({todo}){
    const {id, task, desref} = todo;

    return (
        <div>
            <a href="">
                 <li className="">
                    <h2>{task}{desref}</h2>
                    
                </li>
            </a>
        </div>
    );
}