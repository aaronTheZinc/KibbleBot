import React, { useContext, useReducer } from "react";
import { Bot as NewBot } from "../../../Classes/classes";
import { PrimaryButton as Button } from "../../Pieces/button/index";
import { PrimaryInput as Input } from "../../Pieces/Input/index";
import Reducers from "../../../State/reducers";
import "./index.css";
export default () => {
  const {
    newBot: { initialAppState, setNewBotReducer },
  } = Reducers;
  const [state, dispatch] = useReducer(setNewBotReducer, initialAppState);
  const buttonTheme = {
    textColor: "",
    backgroundColor: "",
    width: "300px",
    height: "100px",
  };
  const inputTheme = {
    width: "10vw",
    height: "80px",
    backgroundColor: "#151A21",
    color: "#FD6868",
  };

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
              <div style={{ display: "flex", marginTop:'10%'  }}>
                <section style={{ marginLeft: '25%' ,float: "left", justifySelf: 'center' }}>
                  <Input
                    theme={inputTheme}
                    onChange={() => console.log("input test")}
                    placeholder="Bot Profile"
                  />
                </section>
                <section style={{ float: "right", marginLeft: '20%' }}>
                  <Input
                    theme={inputTheme}
                    onChange={() => console.log("input test")}
                    placeholder="Bot Profile"
                  />
                </section>
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
