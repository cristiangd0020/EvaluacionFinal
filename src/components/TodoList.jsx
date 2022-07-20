import { Fragment, useEffect, useRef, useState } from "react";
import { TodoItem } from "./TodoItem";
import {v4 as uuid} from "uuid";

const KEY = "todoApp.todos"
export function TodoList() {

    const [todos,setTodos] = useState([])
    const taskRef = useRef();
    const desref = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(KEY));
        if (storedTodos) {
            setTodos(storedTodos)
        }
    }, [])

    useEffect(() =>{
        localStorage.setItem(KEY, JSON.stringify(todos))
    }, [todos])

    const agregarNota = () => {
        const task = taskRef.current.value;
        const desc = desref.current.value;


        console.log(task)
        console.log(desc)
        const id = uuid();
        if (task === '') return;
        if (desc === '') return;
        setTodos((prevTodos) => {
            const newTask = {
                id: id,
                task: task,
                desc: desc
            }
            return[...prevTodos, newTask]
        })
        taskRef.current.value = null;
        desref.current.value = null;


    }

    return (
        <Fragment>
        <h1 className="h1">Post is simulator</h1>
        <div className="input-group mt-3 mb-3">
            <input   ref={taskRef} className="m-3"  type="text" placeholder="Titulo" />
            <input  ref ={desref} className=" m-3" type="text" placeholder="Descripcion" name="Descripcion"/>
            <label htmlFor="">
            <input className="m-3" type="checkbox" />
            importante!
            </label>
            <button className="m-3 btn btn-dark" onClick={agregarNota} type="button">Agregar</button>
        </div>
        <div>
            <ul>
                <li className="m-3">
                    <h6>{todos.map((todo) => (
                        <TodoItem todo={todo} key={todo.id} />
                    ))}</h6>
                </li>
            </ul>
            </div>              
        </Fragment>
    )
}