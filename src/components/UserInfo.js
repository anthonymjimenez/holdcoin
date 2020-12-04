import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/use-auth';


function UserInfo() {
  const auth = useAuth()
  let user = auth.user
  return (
    <>
    <h2>User Info</h2>
    <h3>Username: {user.username}</h3>
    <h3>Age: {user.age}</h3>
    <h3>Balance: ${user.balance}</h3>
    <h3>Total transactions: {user.transactions.length}</h3>
    {/* <p>whoami(Adding this info should be easy with the useAuth hook)</p> */}
    <NavLink to={{pathname: `/ledger`}}>
        <p>View Ledger</p> 
      </NavLink>
<p>GG</p>
    <button onClick={() => auth.signout()}>Signout</button><br></br>
    <button onClick={() => auth.deleteUser()}>Delete Account</button><br></br>
    <button onClick={() => {}}>Remove Hold Goals</button>
    </>
  );
}

export default UserInfo;
