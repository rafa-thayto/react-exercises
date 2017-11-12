import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family>
        <Member name='Rafael' lastName='Thayto' />
    </Family>    

, document.getElementById('app'));

