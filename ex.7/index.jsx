import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Thayto'>
        <Member name='Rafael' />
        <Member name='Giovanna' />
        <Member name='Bruno' />
        <Member name='Larissa' />
    </Family>    

, document.getElementById('app'));

