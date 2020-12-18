import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterWithCustomHook = () => {

    const {state, increment , decrement, reset } = useCounter(652); 


    return (
        <>
            <h1> Counter with hook: { state } </h1>
            <hr/>

            <button onClick = { () => increment(5) } className = "btn btn-primary"> + 1</button>
            <button onClick = { reset } className = "btn"> Reset </button>
            <button onClick = {decrement} className = "btn btn-primary"> - 1</button>
        </>
    )
}
