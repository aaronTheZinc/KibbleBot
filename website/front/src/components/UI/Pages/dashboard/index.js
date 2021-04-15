import React, { useEffect, useState } from "react";
import LeftPannel from "./leftPannel";
import Testdata from "./testdata.json";
import { initialClient } from "./schema";
import Header from "./header";
import "./index.css";

export default () => {
  const [clientData, setClientData] = useState(initialClient);
  const [dashDidLoad, setDashDidLoad] = useState(false);

  useEffect(() => {
    setClientData(Testdata);
  }, [clientData]);

  return (
    <div>
      <section>
        <Header botName="Earth" />
      </section>
      <section>
        <LeftPannel fullName={clientData.client.fullName} bots={clientData.client.bots} />
      </section>
    </div>
  );
};
