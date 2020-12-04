import React from "react";
import CryptoLinkContainer from "./CryptoLinkContainer";

function CryptoContainer({cryptos}) {
  

  return (
    <>
    <h3> Explore the market </h3>
      <CryptoLinkContainer cryptos={cryptos}/>
    </>
  );
}

export default CryptoContainer;
