import { loginWithGitHub, loginWithSpotify } from "./actions/loginActions";
import { setCurrentUser } from './actions/authActions'

const initialUserState = {
  isAuthenticated: false,
  token: null,
  refreshToken: null,
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case "github/auth":
      loginWithGitHub();
    case "spotify/auth":
      loginWithSpotify()
    case "SET_USER":
      setCurrentUser()
      
  }
};

const initialBotState = {
  isAuthenticated: false,
  token: null,
  refreshToken: null
};

//since user doesn't enter it, no token fields


const newBotReducer = (state, action) => {
  switch (action.type) {
    case "github/bot":
      
  }
};

const initialNewBotState = {
    displayName: 'KibbleBot',
    image: 'https://github.com/identicons/app/oauth_app/1596867',
    token: '',
    refreshToken: ''
}

const setNewBotReducer = (state, action) => {
  switch (action.type) {
    case "profile":

  }
};

const initialSpotifyState = {
  isAuthenticated: false
}

export default {
  UserReducer: { initialUserState, stateReducer },
  newBot: {initialBotState, setNewBotReducer},

};
