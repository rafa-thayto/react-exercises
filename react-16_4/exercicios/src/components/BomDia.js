import React from 'react'
// React.Fragment or Fragment using { Fragment }

export default props => [
    <h1 key='h1'>Bom dia {props.name}</h1>,
    <h2 key='h2'>Até breve</h2>
]

/* export default props => (
  <React.Fragment>
    <h1>Bom dia {props.name}</h1>
    <h2>Até breve</h2>
  </React.Fragment>
) */

/* export default props => (
  <div>
    <h1>Bom dia {props.name}</h1>
    <h2>Até breve</h2>
  </div>
) */
