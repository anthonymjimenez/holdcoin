import React, { useEffect, useState }  from 'react';
import { owned } from '../utils/utils' //showurl, isoId, 
import { NavLink } from 'react-router-dom';

function CryptoCard(props) {

const [crypto] = useState(props.location.cryptoProps)
const [user] = useState(props.location.user)
// let {location: {cryptoProps=null}} = props
// let {
//   location: { cryptoProps = null },
// } = props;

useEffect(() => {
    // (!cryptoProps) ?
    //     (async () => {
    //     let id = isoId(props.location.pathname)
    //     let resp = await fetch(`${showurl}${id}`)
    //     let data = await resp.json()
    //     // need to make fetch to userinfo and append
    //     setCrypto(data[0])
    //     })()
    // : // make an IIFE and set user data 
    //     setCrypto(cryptoProps)
},[])

  return (
    <> 
    {localStorage.setItem('currentCrypto', JSON.stringify(crypto))}
    {owned(crypto, user) ? <h2>You own this crypto!</h2> : <NavLink to={{pathname: `/transactions/new`, cryptoProps: crypto}}>
        <h2>Are you ready to start holding?</h2>
      </NavLink> } 
    <img src={crypto?.logo_url} alt={crypto?.symbol+'logo'}width='300' height='300'/>
    <h2>{crypto?.name}</h2>
    </>
  );
}

export default CryptoCard;
