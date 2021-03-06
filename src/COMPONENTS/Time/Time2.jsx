import { observer } from "mobx-react";
import React, { useEffect } from "react";
import "./time2.css";
const Time2 = observer(({ store }) => {

  useEffect(() => {
    const interv = setInterval(() => store.updateCurrentTime(), 1000);
    // cleanup on component swap | so timer don't unnessary run and only run when component is in view.
    return () => {
      clearInterval(interv);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h3 style={{ fontSize: "1.2rem", fontFamily: "Arial" }}>This is Time Component</h3>
      <div className="timediv">{store.curtime}</div>
    </div>
  );
});
export default Time2;
