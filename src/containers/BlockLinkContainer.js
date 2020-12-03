import React from "react";
import BlockLink from "../components/BlockLink";
import { getUnique, totalSizePerCrypto, totalSpend, financial, averageCost } from "../utils/utils";
import { useAuth } from "../context/use-auth";

const BlockLinkContainer = ({ cryptos}) => {
    // 
  let auth = useAuth()
  const renderLinks = () => 
    cryptos.map((crypto, index) => <BlockLink key={index} crypto={crypto} averageCost={averageCost(auth.user, crypto)} size={totalSizePerCrypto(auth.user,crypto)} />);
  ;
  return (
    <div>
      {console.log(averageCost(auth.user, cryptos[1]))}

      {renderLinks()}
    </div>
  );
};
export default BlockLinkContainer;
