import React, { useEffect, useState }  from 'react';
import { showurl } from '../utils/utils'
import {Redirect} from 'react-router'
function CryptoCard(props) {
// take a prop isOwnedByUser 
// if true then append the crypto to include info hold goal, stop limit etc
// use bool to conditionally render 
let [crypto, setCrypto] = useState({})
let {location: {cryptoProps=null}} = props
let id = (cryptoProps == null) ? props.location.pathname.split('/').slice(-1)[0] : cryptoProps.id

useEffect(() => {
    if(!cryptoProps) {
        (async () => {
        let resp = await fetch(`${showurl}${id}`)
        let data = await resp.json()
        setCrypto(data[0])
        })()
    }else{
        setCrypto(cryptoProps)
    }
},[])

  return (
    <> 
    {console.log(crypto)}
   <img src={crypto?.logo_url} width='300' height='300'/>
   <h2>{crypto?.name}</h2>
    </>
  );
}

export default CryptoCard;
