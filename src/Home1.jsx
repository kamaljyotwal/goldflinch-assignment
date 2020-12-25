import { observer } from "mobx-react";
import React from "react";
import "./home1.css";

const Home1 = observer(({ store }) => {
  
  return (
    <div>
      <h3>This is home Component</h3>
      <div className="buttonContainer">
        <div className="screen">{store.counter}</div>
        <button className="minus" onClick={store.decrementCounter}>
          -
        </button>
        <button className="plus" onClick={store.increaseCounter}>
          +
        </button>
      </div>
    </div>
  );
});
export default Home1;
