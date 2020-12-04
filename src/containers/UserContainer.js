import React from "react";
import CryptoLinkContainer from "./CryptoLinkContainer";
import { NavLink } from "react-router-dom";
import { getUnique } from "../utils/utils";
import { useAuth } from "../context/use-auth";

function UserContainer({cryptos}) {
  return (
    <>
      <h3> Your Cryptos </h3>
      <CryptoLinkContainer cryptos={cryptos} />
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
