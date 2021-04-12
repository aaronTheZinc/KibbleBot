import { loginWithGitHub } from "./actions";

const initialAppState = {
  isAuthenticated: false,
  token: null,
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case "github/auth":
      loginWithGitHub();
  }
};
const initialBotState = {
  botName: "",
  profileUrl: "",
};
const newBotReducer = (state, action) => {};

const initialNewBotState = {
    botName: '',
    profileImageUrl: '',
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
