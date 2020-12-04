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

import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_API_KEY);


function Blockfolio() {
  const auth = useAuth();
  let uniqueCryptos = getUnique(auth.user.cryptos);
  let [userData, setUserData] = useState(uniqueCryptos);
  const [balance, setBalance] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    // will need to make some sort of component did mount call
    console.log(auth.user);
    if (auth.user.cryptos) {
      let uniqueCryptos = getUnique(auth.user.cryptos);
      Promise.all(uniqueCryptos.map(appendCryptoInfo)).then(setUserData);
    }
  }, []);

  const reload = async (event) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    // Call your backend to create the Checkout Session
    const response = await fetch('http://localhost:3000/api/v1/create_checkout_session', { 
                              method: 'POST',
                              headers: {
                                "Content-Type": "application/json",
                                Accept: "application/json",
                                Authorization: `Bearer ${localStorage.getItem("token")}`
                              },
                              body: JSON.stringify({amount: balance})
                            })
        

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      console.log(result.error.message)
    }
  };

  const handleChange = (e) => {
    setBalance(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (balance >= 1) {
      reload(e)
    } else {
      window.alert("Please enter balance of at least $1")
    }
    
  }

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
      Total Returns: {userData.length > 1 ? financial(userData.reduce((sum, c) => sum + (c.price * totalSizePerCrypto(auth.user, c)) , 0) - totalSpend(auth.user)): <p>Keep buying to calculate</p>}  </h2>
      <h2>Todays Returns: TBD</h2>
      <button onClick={() => setShow(!show)}>Add money to balance</button>
      {show && <div>
            <div style={{margin: "auto",padding: "20px", width: "80%" }}>
            <h1>Increase Balance</h1>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <input value={balance} onChange={handleChange} type="number" placeholder="$0"/>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
          </div>
        </div>}
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

    
