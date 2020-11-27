import React from "react";
import CryptoLink from "../components/CryptoLink";

const CryptoLinkContainer = ({ cryptos }) => {
  const renderLinks = () => 
    cryptos.map((crypto) => <CryptoLink crypto={crypto} />);
  ;
  return (
    <div>
      {renderLinks()}
    </div>
  );
};
export default CryptoLinkContainer;
