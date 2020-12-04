import React from "react";
import CryptoLink from "../components/CryptoLink";
import { useAuth } from "../context/use-auth";

const CryptoLinkContainer = ({ cryptos}) => {

  const renderLinks = () => 
    cryptos.map((crypto, index) => <CryptoLink key={index} crypto={crypto}/>);
  ;
  return (
      renderLinks()
  );
};
export default CryptoLinkContainer;
