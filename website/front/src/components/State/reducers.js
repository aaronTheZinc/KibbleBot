import {loginWithGitHub} from './actions'

const initialAppState = {
    isAuthenticated: false,
    token: null
}

const stateReducer = (state, action) => {
    switch(action.type) {
        case "github/auth":
            loginWithGitHub()
    }
}
const initialBotState = { 
    botName: '',
    profileUrl:'',
}
const newBotReducer = (state, action) => {

}

 export default {
     AppReducer: {initialAppState, stateReducer},
     newBot: {}
     
 }
