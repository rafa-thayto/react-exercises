import React, { Component } from 'react'

// Ou utilizar React.Component
export default class ClassComponent extends Component {
    // É obrigatório ter o método render
    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }
}
