import React, { useEffect, useState } from "react";
import CryptoLinkContainer from '../containers/CryptoLinkContainer';
import { showurl, sampleUserData} from "../utils/utils";
import { useAuth } from "../context/use-auth";

function Blockfolio() {
  const auth = useAuth();

  useEffect(() => {
    // will need to make some sort of component did mount call
  }, []);

  const appendCryptoInfo = async (userData) => {
    let resp = await fetch(`${showurl}${userData.symbol}`);
    let data = await resp.json();
    return { ...data[0], userData };
  }; // need to add loading 
  
  return (
    <> 
      {auth.user.cryptos.length === 0 && <h1>Time to make your first purchase</h1>}
      {<CryptoLinkContainer cryptos={auth.user.cryptos} user={auth.user}/>}
    </>
  );
}

export default Blockfolio;
