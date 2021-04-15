import React from "react";
import "./index.css";

const Botbutton = ({ botName, id }) => {
  return (
    <div>
      <section className="dash-bot-bubble">
       <label className='dash-bot-name'>{botName}</label>
      </section>
    </div>
  );
};

const Pannel = ({ fullName, bots }) => {
  console.log(bots);
  return (
    <div id="left-dashboard-pannel">
      <section style={{ paddingTop: "5vh" }}>
        <label className="full-name-lbl">{fullName}</label>
      </section>
      <section className="bots-bubble-container">
        {bots.map((bot) => (
          <Botbutton botName={bot.bot_name} id={bot.id} />
        ))}
      </section>
    </div>
  );
};

export default Pannel;
