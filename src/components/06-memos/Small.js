import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('Toy aqui');
    return (
        <small>
            {value}
        </small>
    )
})
