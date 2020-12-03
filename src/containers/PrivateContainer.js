import React, { useEffect, useState } from "react";
import CryptoContainer from "./CryptoContainer";
import UserContainer from "./UserContainer";
import { url, appendUserInfo } from "../utils/utils";
import { useAuth } from "../context/use-auth";

function PrivateContainer({ cryptos }) {
  let [cryptoData, setCryptoData] = useState([]);
//useAuth grab user use to render user crypto quickinfo
// render cryptos and only append userinfo in crypto card?
  let auth = useAuth()
  useEffect(() => {
    (async () => {
      const results = await fetch(url);
      const data = await results.json();

    //   setUser(await signInUser());
      //make fetch to user info don't set to hook, just send to appendUserInfo(, userData)
      setCryptoData(data);
      appendUserInfo(setCryptoData, auth.user);
    })();
  }, []);

  return (
    <div>
          {console.log(auth.user)}

      {console.log(cryptoData)}
      <UserContainer cryptos={cryptoData.filter((c) => c.userData)} />
      <CryptoContainer cryptos={cryptoData} />
    </div>
  );
}

export default PrivateContainer;
