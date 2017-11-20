import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from './fieldActions'

class Field extends Component {
    render() {
        return (
            <div>
                <label>{ this.props.value }</label> <br/>
                <input onChange={ this.props.changeValue } value={ this.props.value } />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

function mapDispachToProps(dispath) {
    return bindActionCreators({ changeValue }, dispath)
}

// 1: dizendo para o react redux como ele deve pegar os estados e jogar as props no componente
// 2: dizendo para o react como ele vai pegar os actionsCreators(os métodos que vão disparar açoes) e vai mapear os métodos dentro das props do componente
export default connect(mapStateToProps, mapDispachToProps)(Field);
