import React from 'react'
import './index.css'

export default ({botName}) => {
    return (
        <div id='header-dashboard' >
            <label id='bot-name-dashboard'>{botName}</label>
        </div>
    )
}