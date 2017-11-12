import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
    // props.children é uma propriedade especial que sempre está disponível nas tags
    <div>
        <h1>Família</h1>
        { childrenWithProps(props.children, props)}
    </div>
)
