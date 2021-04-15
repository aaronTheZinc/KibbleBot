import React, { useContext, useReducer } from "react";
import { Bot as NewBot } from "../../../Classes/classes";
import { PrimaryButton as Button } from "../../Pieces/button/index";
import { PrimaryInput as Input } from "../../Pieces/Input/index";
import {appState} from '../../../State/Context'
import Reducers from "../../../State/reducers";
import "./index.css";

const buttonTheme = {
  textColor: "",
  backgroundColor: "",
  width: "600px",
  height: "100px",
};
const inputTheme = {
  width: "15vw",
  height: "80px",
  backgroundColor: "#151A21",
  color: "#FD6868",
};

export default () => {
  const context = useContext(appState);
  console.log(context.state)
  const {
    newBot: { initialAppState, setNewBotReducer },
  } = Reducers;
  const [state, dispatch] = useReducer(setNewBotReducer, initialAppState);

  const Bot = new NewBot();
  return (
    <div className="main-create-bot ">
      <section className="new-bot-container">
        <section className="new-bot-lbl-container">
          <label className="new-bot-lbl">
            Create Your
            <br />
            First Bot!
          </label>
          <span
            style={{ fontSize: "20px", color: "#FD6868", fontFamily: "Asap" }}
          >
            <ol style={{ marginTop: "15vh" }}>
              <li>• Tokens are Encrypted</li>
            </ol>
          </span>
        </section>

        <div className="new-bot-form-container">
          <section className="new-bot-form">
            <section className="new-bot-input-container">
              <div style={{ marginLeft: "15%" }}>
                <div style={{ display: "flex" }}>
                  <section style={{ justifySelf: "center", marginTop: "10vh" }}>
                    <Input
                      theme={inputTheme}
                      onChange={() => dispatch({ type: "name", value: "" })}
                      placeholder="Bot Profile Name"
                    />
                  </section>
                  <section style={{ marginLeft: "10%", marginTop: "10vh" }}>
                    <Input
                      theme={inputTheme}
                      onChange={() => console.log("input test")}
                      placeholder="Bot Profile Image URL"
                    />
                  </section>
                </div>
                <div style={{ display: "flex", marginTop: "10%" }}>
                  <section style={{ justifySelf: "center" }}>
                    <Input
                      theme={inputTheme}
                      onChange={() => console.log("input test")}
                      placeholder="Token"
                    />
                  </section>
                  <section style={{ marginLeft: "10%" }}>
                    <Input
                      theme={inputTheme}
                      onChange={() => console.log("input test")}
                      placeholder="Refresh Token"
                    />
                  </section>
                </div>
              </div>
            </section>

            <section className="create-bot-button">
              <Button
                theme={buttonTheme}
                action={() => console.log("Create Bot")}
                title="Create Bot!"
              />
            </section>
          </section>
        </div>
      </section>
    </div>
  );
};
