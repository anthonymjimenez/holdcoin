import React, { useEffect, useState } from "react";
import CryptoLinkContainer from '../containers/CryptoLinkContainer';
import { showurl, sampleUserData} from "../utils/utils";

function Blockfolio(props) {
  console.log(props)
  let {
    location: { cryptoProps = [] },
  } = props;
  let [userCryptoData, setUserData] = useState(cryptoProps);

  useEffect(() => {
   userCryptoData.length == 0 && (async () => {
      Promise.all(sampleUserData.map(appendCryptoInfo)).then(setUserData);
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
      {userCryptoData.length == 0 && <h1>Time to make your first purchase</h1>}
      {<CryptoLinkContainer cryptos={userCryptoData}/>}
 
    </>
  );
}

export default Blockfolio;
