import React from "react";
import CryptoLink from "../components/CryptoLink";

const CryptoLinkContainer = ({ cryptos, user }) => {
  const renderLinks = () => 
    cryptos.map((crypto, index) => <CryptoLink key={index} crypto={crypto} user={user} />);
  ;
  return (
    <div>
      {renderLinks()}
    </div>
  );
};
export default CryptoLinkContainer;
