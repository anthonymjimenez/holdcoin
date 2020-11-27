import React, { useEffect, useState } from "react";
import CryptoLinkContainer from "./CryptoLinkContainer";

function UserContainer({cryptos}) {
  return (
    <>
      <h3> Your Cryptos </h3>
      <CryptoLinkContainer cryptos={cryptos.filter((cryptos) => cryptos.userData)}/>
    </>
  );
}

export default UserContainer;
