import React, { useEffect, useState } from "react";
import Blockfolio from "../components/Blockfolio";
import CryptoLinkContainer from "./CryptoLinkContainer";
import { NavLink } from "react-router-dom";

function UserContainer({ user }) {
  

  return (
    <>
      <h3> Your Cryptos </h3>
      <CryptoLinkContainer cryptos={user.cryptos} user={user} />
      <NavLink
        to={{
          pathname: `/blockfolio`,
          cryptoProps: user.cryptos,
          user: user
        }}
      >
        Blockfolio
      </NavLink>
    </>
  );
}

export default UserContainer;
