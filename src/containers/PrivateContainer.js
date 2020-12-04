/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
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
    <>
      <div className="content">
        <UserContainer cryptos={cryptoData.filter((c) => c.userData)} />
        <CryptoContainer cryptos={cryptoData} />
      </div>
    </>
  );
}

export default PrivateContainer;