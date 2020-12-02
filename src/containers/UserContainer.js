import React from "react";
import CryptoLinkContainer from "./CryptoLinkContainer";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/use-auth";

function UserContainer() {
  const auth = useAuth()

  return (
    <>
      <h3> Your Cryptos </h3>
      <CryptoLinkContainer cryptos={auth.user.cryptos}/>
      <NavLink
        to={{
          pathname: `/blockfolio`
        }}
      >
        Blockfolio
      </NavLink>
    </>
  );
}

export default UserContainer;
