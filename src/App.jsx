import React, { Fragment } from 'react';
import { TodoList } from './components/TodoList';
import './index.css';

export function App(){
    return (

        <Fragment>
            <div className='container mt-3'>
                <TodoList />
            </div>

        </Fragment>
    );
}
