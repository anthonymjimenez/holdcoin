import React, { useEffect, useState }  from 'react';
import { useAuth } from "../context/use-auth";
import {showurl, isoId, owned } from '../utils/utils'
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import TransactionForm from "./TransactionForm"

function CryptoCard(props) {
  const auth = useAuth()
  const [crypto, setCrypto] = useState({})
  const [displayForm, setDisplayForm] = useState(false)


const location = useLocation();
console.log(location.pathname)
useEffect(() => {
        (async () => {
        let id = isoId(location.pathname)
        let resp = await fetch(`${showurl}${id}`)
        let data = await resp.json()
        // need to make fetch to userinfo and append
        setCrypto(data[0])
        })()
},[])

  return (
    <> 
    {localStorage.setItem('currentCrypto', JSON.stringify(crypto))}
    {owned(crypto, auth.user) ?
      <>
        <h2>You own this crypto!</h2>
        <a href="#" onClick={() => setDisplayForm(!displayForm)}>
          <h2>Buy more?</h2>
        </a> 
      </> : <a href="#" onClick={() => setDisplayForm(!displayForm)} >
        <h2>Are you ready to start holding?</h2>
      </a > }
    <img src={crypto?.logo_url} alt={crypto?.symbol+'logo'}width='300' height='300'/>
    <h2>{crypto?.name}</h2>
    <h2>{crypto?.price}</h2>
    {displayForm && <TransactionForm crypto={crypto} user={auth.user}/>}
    </>
  );
}

export default CryptoCard;
