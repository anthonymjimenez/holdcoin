import React, { useEffect, useState } from "react";
import BlockLinkContainer from "../containers/BlockLinkContainer";
import { NavLink } from "react-router-dom";
import { showurl } from "../utils/utils";
import { useAuth } from "../context/use-auth";
import { getUnique } from "../utils/utils";

function Blockfolio() {
  const auth = useAuth();
  let [userData, setUserData] = useState(null);
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

  console.log(userData);

  return (
    <>
      {auth.user.cryptos.length === 0 && (
        <h1>Time to make your first purchase</h1>
      )}
      <h2>Buying Power: balance</h2>
      <h2>Total Spent: (add up all cost)</h2>
      <h2>
        Total Returns: (The cost of buying the same amount of coin today(calc
        and sum the (size*current_cost) of all owned coins ) - (all cost)
      </h2>
      <h2>Todays Returns: TBD</h2>
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
