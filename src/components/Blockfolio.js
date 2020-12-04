import React, { useEffect, useState } from "react";
import BlockLinkContainer from "../containers/BlockLinkContainer";
import { NavLink } from "react-router-dom";
import { showurl, totalSpendPerCrypto } from "../utils/utils";
import { useAuth } from "../context/use-auth";
import {
  getUnique,
  totalSizePerCrypto,
  totalSpend,
  financial,
  averageCost,
} from "../utils/utils";

function Blockfolio() {
  const auth = useAuth();
  let uniqueCryptos = getUnique(auth.user.cryptos);
  let [userData, setUserData] = useState(uniqueCryptos);
  useEffect(() => {
    // will need to make some sort of component did mount call
    console.log(auth.user);
    if (auth.user.cryptos) {
      let uniqueCryptos = getUnique(auth.user.cryptos);
      Promise.all(uniqueCryptos.map(appendCryptoInfo)).then(setUserData);
    }
  }, []);

  const appendCryptoInfo = async (userData) => {
    let resp = await fetch(`${showurl}${userData.symbol}`);
    let data = await resp.json();
    return { ...data[0], userData };
  }; // need to add loading

 
  const totalReturn = () =>
    userData.reduce(
      (sum, c) => sum + c.price * totalSizePerCrypto(auth.user, c),
      0
    ) - totalSpend(auth.user)

    const usdValueOfCoins = () => 
   totalReturn()/100 * totalSpend(auth.user) + totalSpend(auth.user)
    
    console.log(usdValueOfCoins())
  return (
    <>
      {auth.user.cryptos.length === 0 && (
        <h1>Time to make your first purchase</h1>
      )}
      <h2>Buying Power: {financial(auth.user.balance)}</h2>
      <h2>Total Spent: {financial(totalSpend(auth.user))}</h2>
      <h2>
        Total Returns: 
        {userData.length > 1 ? (
          <>
              %{financial(totalReturn())}{" "}
            <h3>
              Current USD Value of Owned Coins:
              ${financial(usdValueOfCoins())}
              <br></br>All Capital: ${financial(usdValueOfCoins() + auth.user.balance)}
            </h3>
          </>
        ) : (
          <p>Keep buying to calculate</p>
        )}{" "}
      </h2>
      <button>Add money to balance</button>
      <BlockLinkContainer cryptos={getUnique(auth.user.cryptos)} />
      <hr />
      <NavLink to={{ pathname: `/userinfo` }}>
        <p>Account Information</p>
      </NavLink>
    </>
  );
}

export default Blockfolio;
