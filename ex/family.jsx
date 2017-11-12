import React from 'react'

export default props => (
    // props.children é uma propriedade especial que sempre está disponível nas tags
    <div>
        <h1>Família</h1>
        {props.children}
    </div>
)
