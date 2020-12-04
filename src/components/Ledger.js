import React from 'react';
import { useAuth } from '../context/use-auth';
import { NavLink } from 'react-router-dom';
import { financial} from "../utils/utils";


function Ledger() {
  let auth = useAuth()
  const renderTransactions = () => 
    auth.user.transactions.map((transact) => {
      return <li>
      Symbol: {transact.symbol} <br />
      Total Price of Purchase: {financial(transact.totalPrice)} <br/>
      Coins Purchased: {transact.size} <br/>
      Price at Purchase: {financial(transact.snapshotPrice)}
      </li>
    })
  
  return (
    <>

    <NavLink to={{ pathname: `/userinfo` }}>
    <p>Back to Account Information</p>
  </NavLink>
    {console.log(auth.user)}
   <h1>Ledger</h1>
   <ol>
    {renderTransactions()}
    </ol>
    </>
  );
}

export default Ledger;
