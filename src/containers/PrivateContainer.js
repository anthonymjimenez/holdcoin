import React, { useEffect, useState } from "react";
import CryptoContainer from "./CryptoContainer";
import UserContainer from "./UserContainer";
import { url, signInUser } from "../utils/utils";

function PrivateContainer({ cryptos }) {
  let [cryptoData, setCryptoData] = useState([]);
//useAuth grab user use to render user crypto quickinfo
// render cryptos and only append userinfo in crypto card?

  useEffect(() => {
    (async () => {
      const results = await fetch(url);
      const data = await results.json();

    //   setUser(await signInUser());
      //make fetch to user info don't set to hook, just send to appendUserInfo(, userData)
      setCryptoData(data);
      //appendUserInfo(setCryptoData, user);
      console.log(cryptoData);
    })();
  }, []);

  return (
    <div>
      {console.log(user)}

      <UserContainer cryptos={cryptoData} userInfo={user} />
      <CryptoContainer cryptos={cryptoData} userInfo={user} />
    </div>
  );
}

export default PrivateContainer;
