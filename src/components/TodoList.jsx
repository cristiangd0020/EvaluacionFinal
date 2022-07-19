import {Fragment} from "react";




export function TodoList() {
    return (
    <Fragment>
        <h1>Post is simulator</h1>
        <div className="input-group mt-3 mb-3">
            <input  className="m-3" type="text" placeholder="Titulo" />
            <input className=" m-3" type="text" placeholder="Descripcion" />
            <label htmlFor="">
            <input className="m-3" type="checkbox" />
            importante!
            </label>
            <button className="m-3 btn btn-dark" type="button">Agregar</button>
        </div>
     </Fragment>
    )
}