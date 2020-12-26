import React, { useEffect } from "react";
import { observer } from "mobx-react";
import "./data3.css";

const Data3 = observer(({ store }) => {
  const apiaddress = "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole";

  var fetchfunc = () => {
    fetch(apiaddress)
      .then((res) => res.json())
      .then((res) => store.setapidata(res));
  };

  useEffect(() => {
    fetchfunc();
    // eslint-disable-next-line
  }, []);

  // mapped variable containing individual cards
  const mappedData = store.apidata.map((i) => (
    <div className="profileCard" key={i.email}>
      {i.first} {i.last}
    </div>
  ));
  // --------------------

  return (
    <div>
      {store.apidata.length === 0 ? (
        <div className="loading"> Loading...</div>
      ) : (
        <div className="cardsContainer">{mappedData}</div>
      )}
    </div>
  );
});
export default Data3;
