import React, { useEffect, useState } from "react";
import Blockfolio from "../components/Blockfolio";
import CryptoLinkContainer from "./CryptoLinkContainer";
import { NavLink } from "react-router-dom";

function UserContainer({ cryptos }) {
  

  return (
    <>
      <h3> Your Cryptos </h3>
      <CryptoLinkContainer cryptos={cryptos} />
      <NavLink
        to={{
          pathname: `/blockfolio`,
          cryptoProps: cryptos,
        }}
      >
        Blockfolio
      </NavLink>
    </>
  );
}

export default UserContainer;
