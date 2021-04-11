import React, { useContext, useState } from 'react'
import {GithubLoginButton} from "react-social-login-buttons";
import {appState} from '../../../State/Context'
// Git Hub Auth
export default ({ click }) => {
    const store = useContext(appState)
    const {state, dispatch} = store
    console.log(state)
    const [oAuthData, setOAuthData] = useState('DEFAULT') 

    return (
    <GithubLoginButton onClick={() => dispatch({type: 'github/auth'})} />
    )
}