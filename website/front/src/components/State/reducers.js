import { loginWithGitHub, loginWithSpotify } from "./actions";

const initialAppState = {
  isAuthenticated: false,
  token: null,
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case "github/auth":
      loginWithGitHub();
    case "spotify/auth":
      loginWithSpotify()
  }
};

const initialBotState = {
  displayName: "",
  image: "",
};

const initialSpotifyState = {
  
}
const newBotReducer = (state, action) => {};

const initialNewBotState = {
    displayName: 'KibbleBot',
    image: '',
    token: '',
    refreshToken: ''
}

const setNewBotReducer = (state, action) => {
  switch (action.type) {
    case "profile":

  }
};

export default {
  AppReducer: { initialAppState, stateReducer },
  newBot: {initialAppState, setNewBotReducer},

};
