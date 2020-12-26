import { observer } from "mobx-react";
import React, { useEffect } from "react";
import "./currency4.css";

const Currency4 = observer(({ store }) => {
  
  let api1 = "https://free.currconv.com/api/v7/convert?q=";
  let api2 = "";
  let api3 = "";
  let api4 = "&compact=ultra&apiKey=dd8e835c3d0a875afe5e";

  function fetchingFunc2() {
    const link = api1 + api2 + "_" + api3 + api4;
    fetch(link)
      .then((res) => res.json())
      .then((res) => store.setresponseNumFromAPI(Object.values(res)));
  }

  useEffect(() => {
    store.setresultCurrency(store.inputVal, store.responseNumFromAPI);
    // eslint-disable-next-line
  }, [store.responseNumFromAPI]);

  // small functions grabbing user input from input/form-components and assigning it to concate to the api address to inquire
  function dropdownValue1(e) {
    api2 = e.target.value;
  }
  function dropdownValue2(e) {
    api3 = e.target.value;
  }
  function inputgrabber(e) {
    store.setinputVal(e);
  }
  // -------------------------------------------

  return (
    <div>
      <h4 style={{ fontSize: "1.1rem", fontFamily: "Arial" }}>
        This is Currency convertor component
      </h4>
      <div className="currencydiv">
        <div className="inputDiv">
          <input
            type="number"
            className="inputBar"
            placeholder="Amount here"
            min="1"
            onChange={inputgrabber}
            value={store.inputVal}
          />
          {/* Submit button */}
          <button className="submitButton" type="submit" onClick={fetchingFunc2}>
            Find
          </button>
        </div>
        <div className="selectorBar">
          <select id="cars" name="cars" className="selector1" onChange={dropdownValue1}>
            <option defaultValue>Select Currency</option>
            <option value="XCD">East Caribbean dollar</option>
            <option value="EUR">European euro</option>
            <option value="GEL">Georgian lari</option>
            <option value="XCD">East Caribbean dollar</option>
            <option value="HTG">Haitian gourde</option>
            <option value="INR">Indian rupee</option>
            <option value="ILS">Israeli new sheqel</option>
            <option value="KZT">Kazakhstani tenge</option>
            <option value="KWD">Kuwaiti dinar</option>
            <option value="LSL">Lesotho loti</option>
            <option value="USD">U.S. Dollar</option>
          </select>
          <p className="to">to</p>
          <select id="cars" name="cars" className="selector2" onChange={dropdownValue2}>
            <option defaultValue>Select Currency</option>
            <option value="XCD">East Caribbean dollar</option>
            <option value="EUR">European euro</option>
            <option value="GEL">Georgian lari</option>
            <option value="XCD">East Caribbean dollar</option>
            <option value="HTG">Haitian gourde</option>
            <option value="INR">Indian rupee</option>
            <option value="ILS">Israeli new sheqel</option>
            <option value="KZT">Kazakhstani tenge</option>
            <option value="KWD">Kuwaiti dinar</option>
            <option value="LSL">Lesotho loti</option>
            <option value="USD">U.S. Dollar</option>
          </select>
        </div>
        {/* <div className="resultBar">{store.resultCurrency}</div> */}
        <div className="resultBar">
          {store.resultCurrency === 0 ? "Result here" : store.resultCurrency}
        </div>
      </div>
    </div>
  );
});
export default Currency4;
