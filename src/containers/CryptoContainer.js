import React, { useEffect, useState } from "react";
import CryptoCard from "../components/CryptoCard";
import { url } from "../utils/utils";
import CryptoLinkContainer from "./CryptoLinkContainer";
import { Route } from "react-router-dom";

function CryptoContainer() {
  let [cryptoData, setCryptoData] = useState([]);
  useEffect(() => {
    const setData = async () => {
      const results = await fetch(url);
      const data = await results.json();
      setCryptoData(data);
    };

    setData();
  }, []);


  return (
    <>
    
      <CryptoLinkContainer cryptos={cryptoData}/>
      <Route path="/cryptos/:id" component={CryptoCard} />
    </>
  );
}

export default CryptoContainer;
