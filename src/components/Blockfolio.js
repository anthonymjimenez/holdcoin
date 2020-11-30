import React, {useEffect, useState }  from 'react';
import { showurl, sampleUserData, appendUserInfo } from "../utils/utils";
function Blockfolio(props) {
  let {location: {cryptoProps=null}} = props
  let [userData, setUserData] = useState(cryptoProps)

useEffect(() => {
  (async () => {
    Promise.all(sampleUserData.map(appendCryptoInfo)).then(setUserData)
    // fetch to user data
    })()
},[])

const appendCryptoInfo = async (userData) => {
    let resp = await fetch(`${showurl}${userData.symbol}`)
    let data = await resp.json()
    return {...data[0], ...userData} 
}
  return (
    <> 
    {console.log(userData)}
    <img src="https://miro.medium.com/max/324/1*HI4kj-TPAQrfQkAdrw2KTA.png" alt="" srcset=""/>
    </>
  );
}

export default Blockfolio;
