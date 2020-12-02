import React, { useEffect, useState } from "react";
import Blockfolio from "../components/Blockfolio";
import CryptoLinkContainer from "./CryptoLinkContainer";
import { NavLink } from "react-router-dom";

function UserContainer({ cryptos }) {
  console.log(cryptos)
  const filterCryptos = (cryptos) =>
    cryptos.filter((cryptos) => cryptos);

  return (
    <>
      <h3> Your Cryptos </h3>
      <CryptoLinkContainer cryptos={filterCryptos(cryptos)} />
      <NavLink
        to={{
          pathname: `/blockfolio`,
        }}
      >
        Blockfolio
      </NavLink>
    </>
  );
}

export default UserContainer;
