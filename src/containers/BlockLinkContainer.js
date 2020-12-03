import React from "react";
import BlockLink from "../components/BlockLink";
import { useAuth } from "../context/use-auth";

const BlockLinkContainer = ({ cryptos}) => {
    // 
  const renderLinks = () => 
    cryptos.map((crypto, index) => <BlockLink key={index} crypto={crypto}/>);
  ;
  return (
    <div>
      {renderLinks()}
    </div>
  );
};
export default BlockLinkContainer;
