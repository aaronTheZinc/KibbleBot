import React, {useContext} from 'react'
import {appState} from '../../../State/Context'
const Home = () => {
    const store = useContext(appState)
    const {state} = store
    return (
        <div>
           <h2> Home! </h2>
        </div>
    )
}

export default Home