import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/use-auth';
import AddBalance from './AddBalance'

function UserInfo() {
  const auth = useAuth()
  return (
    <>
    <h2>User Info</h2>
    <p>whoami(Adding this info should be easy with the useAuth hook)</p>
    <NavLink to={{pathname: `/ledger`}}>
        <p>View Ledger</p> 
      </NavLink>

    <p>Change password, change username, delete user (add these methods to auth object)</p>
    <AddBalance user={auth.user}/>
    <p>Remove hold goals</p>
    </>
  );
}

export default UserInfo;
