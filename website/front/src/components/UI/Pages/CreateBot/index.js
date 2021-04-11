import React, { useContext } from "react";
import { Bot as NewBot } from "../../../Classes/classes";

import "./index.css";
export default () => {
  const Bot = new NewBot();
  return (
    <div className="main-create-bot ">
      <section className="new-bot-container"></section>
    </div>
  );
};
