import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import { todoReducer } from './todoReducer';

import './todoApp.css';



const init = () => {
    
    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
        
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false,
    // }]
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    })

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleRemove = (todoid) => {
        const action = {
            type: 'remove',
            payload: todoid
        }

        dispatch(action);
    }

    const handleToggle = (todoid) => {
        const action = {
            type: 'toggle',
            payload: todoid
        }

        dispatch(action);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }
        
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false,
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({ todos.length }) </h1>
            <hr/>

            <div className="row">

                <div className="col-7">

                    <ul className="list-group list-group-flush">
                        {
                            todos.map( (todo, i) => (
                                <li 
                                key= {todo.id}
                                className="list-group-item"
                                >
                                <p className= {`${todo.done && 'complete'}`}
                                    onClick = {
                                        () => handleToggle(todo.id)
                                    }
                                >
                                    {i + 1}. {todo.desc} 
                                    </p>
                                    <button
                                        className="btn btn-danger"
                                        onClick = {
                                            () => handleRemove(todo.id)
                                        }
                                    >
                                        Borrar
                                    </button>
                                </li>
                            )) 
                        }
                    </ul>

                </div>
                <div className="col-5">
                     <h4>Agregar Algo</h4>
                     <hr/>

                     <form onSubmit={handleSubmit}>
                        
                        <input
                        autoComplete="off"
                        className="form-control"
                        name ="description"
                        placeholder="Agregar desc"
                        type="text"
                        value={description}
                        onChange={handleInputChange}
                        />
                        <button
                            className="btn btn-outline-primary mt-1 btn-block"
                            type="submit"
                        >
                            Agregar
                        </button>

                     </form>
                </div>

            </div>

        </div>
    )
}
