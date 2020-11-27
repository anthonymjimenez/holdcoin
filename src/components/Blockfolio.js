import React from 'react';

function Blockfolio(props) {
  let {location: {cryptoProps=null}} = props


  return (
    <> 
    {console.log(cryptoProps)}
    <img src="https://miro.medium.com/max/324/1*HI4kj-TPAQrfQkAdrw2KTA.png" alt="" srcset=""/>
    </>
  );
}

export default Blockfolio;
