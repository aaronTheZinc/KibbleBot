import React, { useContext } from "react";
import { appState } from "../../../State/Context";
import Bubble from "./bubble";
import "./index.css";

import LoginWithGitHub from '../../Pieces/GitHubLogin/index'
const Usages = [
  "Manage The Messages In Chat. 📝",
  "!Add Commands ✔️",
  "Get Room Stats 📊,",
];
const Home = () => {
  const store = useContext(appState);
  const { state } = store;
  return (
    <div>
      <div>
        <div className="sub-container">
          <section className="textContainer">
            <span className="big-label">
              Create Your <br />
            </span>
            <span className="big-label" style={{ color: "#dee3ea" }}>
              Doge House Bot <span style={{ color: "#fd6868" }}>!</span>
            </span>
            <section className='login-section'>
                <LoginWithGitHub />
            </section>
          </section>
          <section className="ussage-container">
            <label className="ussage-label"> Use Cases 🤖 </label>
            <section style={{ margin: "0 auto" }}>
              {Usages.map((element) => (
                <Bubble text={element} />
              ))}
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
