import React, { useState, useEffect } from "react";
import "./data3.css";

const Data3 = () => {
  const apiaddress = "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole";
  const [apidata, setapidata] = useState([]);

  var fetchfunc = () => {
    fetch(apiaddress)
      .then((res) => res.json())
      .then((res) => setapidata(res));
  };

  useEffect(() => {
    fetchfunc();
  }, []);

  // mapped variable containing individual cards
  const mappedData = apidata.map((i) => (
    <div className="profileCard" key={i.email}>
      {i.first} {i.last}
    </div>
  ));
  return (
    <div>
      {apidata.length === 0 ? (
        <div className="loading"> Loading...</div>
      ) : (
        <div className="cardsContainer">{mappedData}</div>
      )}
    </div>
  );
};
export default Data3;
