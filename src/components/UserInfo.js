import React from 'react';
import { useAuth } from '../context/use-auth';

function UserInfo() {
  let auth = useAuth()
  return (
    <>
    <h2>User Info</h2>
    <p>Adding this info should be easy with the useAuth hook</p>
    </>
  );
}

export default UserInfo;
