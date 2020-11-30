import React, { useEffect, useState } from "react";
import Blockfolio from "../components/Blockfolio";
import CryptoLinkContainer from "./CryptoLinkContainer";
import { NavLink } from "react-router-dom";

function UserContainer({ cryptos }) {
  
  const filterCryptos = (cryptos) =>
    cryptos.filter((cryptos) => cryptos.userData);

  return (
    <>
      <h3> Your Cryptos </h3>
      <CryptoLinkContainer cryptos={filterCryptos(cryptos)} />
      <NavLink
        to={{
          pathname: `/blockfolio`,
          cryptoProps: filterCryptos(cryptos),
        }}
      >
        Blockfolio
      </NavLink>
    </>
  );
}

export default UserContainer;
