import React, { useEffect, useState } from "react";
import CryptoLinkContainer from '../containers/CryptoLinkContainer';
import { showurl, sampleUserData} from "../utils/utils";

function Blockfolio(props) {
  let {
    location: { cryptoProps = [] },
  } = props;
  let [userData, setUserData] = useState(cryptoProps);

  useEffect(() => {
    (async () => {
      Promise.all(cryptoProps.map(appendCryptoInfo)).then(setUserData);
      // fetch to user data
    })();
  }, []);

  const appendCryptoInfo = async (userData) => {
    let resp = await fetch(`${showurl}${userData.symbol}`);
    let data = await resp.json();
    return { ...data[0], userData };
  }; // need to add loading 
  
  return (
    <> 
      {userData.length === 0 && <h1>Time to make your first purchase</h1>}
      {<CryptoLinkContainer cryptos={userData} user={props.location.user}/>}
    </>
  );
}

export default Blockfolio;
