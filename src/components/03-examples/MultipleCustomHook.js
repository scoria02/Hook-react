import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

import '../02-useEffect/effects.css'

export const MultipleCustomHook = () => {

    const {counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];

    console.log(author, quote);

    return (
        <div>
            <h1> breakingBad  </h1>
            <hr/>

            {
                loading
                ?
                (

                    <div className= "alert alert-info text-center">
                        Loading...
                    </div>

                )
                :
                (

                    <figure className="text-left">
                        <blockquote className="blockquote">
                            <p className="mb-0"> {quote} </p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            {author} 
                        </figcaption>
                        <button onClick={increment} className="btn btn-primary">Siguente</button>
                    </figure>


                )
            }


        </div>
    )
}
