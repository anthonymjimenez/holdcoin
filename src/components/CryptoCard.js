import React, { useEffect, useState } from "react";
import { useAuth } from "../context/use-auth";
import { showurl, isoId, owned, financial, find, totalSizePerCrypto, totalSpendPerCrypto, averageCost} from "../utils/utils";
import { useLocation } from "react-router-dom";
import TransactionForm from "./TransactionForm";

import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../utils/css/animate.min.css";
import "../utils/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "../utils/css/demo.css";
import "../utils/css/pe-icon-7-stroke.css";

function CryptoCard(props) {
  const auth = useAuth();
  const [crypto, setCrypto] = useState({});
  const [displayForm, setDisplayForm] = useState(false);
  const [userData, setUserData] = useState({})
  const location = useLocation();
  
  useEffect(() => {
    (async () => {
      let id = isoId(location.pathname);
      let resp = await fetch(`${showurl}${id}`);
      let data = await resp.json();
      // need to make fetch to userinfo and append
      setCrypto(data[0]);
      setUserData(find(crypto, auth.user))
    })()
    const interval = setInterval(async () => {
      let id = isoId(location.pathname);
      let resp = await fetch(`${showurl}${id}`);
      let data = await resp.json();
      // need to make fetch to userinfo and append
      console.log("MMM");
      setCrypto(data[0]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="card card-stats">
        <div className="content">
          <Row>
            <Col xs={5}>
              <div className="icon-big text-center icon-warning">
                <img
                  src={crypto?.logo_url}
                  alt={crypto?.symbol + "logo"}
                  width="300"
                  height="300"
                />
              </div>
            </Col>
            <Col xs={7}>
              <div className="numbers">
                {/* <p>{this.props.statsText}</p> */}
                {/* {this.props.statsValue} */}
              </div>
            </Col>
          </Row>
          <div className="footer">
            <hr />
            <div className="stats">
              {/* {this.props.statsIcon} {this.props.statsIconText} */}
            </div>
          </div>
        </div>
      </div>
      
      <h3>{crypto.name}({crypto.symbol})</h3>
      <h3>Current Price: {financial(crypto.price)}</h3>
      <h3>All-Time High: ${financial(crypto.high)} was set on {crypto.high_timestamp?.split('T')[0]}</h3>
      <h3>Year to Date Returns: {financial(crypto.ytd?.price_change_pct * 100)}% </h3>
      <h3>Thirty Day Returns: {financial(crypto['30d']?.price_change_pct * 100)}% </h3> 

      <h3>Market Cap: ${crypto.market_cap}</h3>

      {owned(crypto, auth.user) ? (
        <>
          <h2>You own this crypto!</h2>
          <a href="#" onClick={() => setDisplayForm(!displayForm)}>
            <h2>Buy more?</h2>
          </a>
          <h4>Coins Owned: {totalSizePerCrypto(auth.user, crypto)}</h4>
          <h4>Total Spent: {totalSpendPerCrypto(auth.user, crypto)}</h4>
          <h4>Average Cost: {averageCost(auth.user,crypto)}</h4>
          <h4>
            Total Return: {crypto.price * totalSizePerCrypto(auth.user, crypto) - totalSpendPerCrypto(auth.user, crypto)}
          </h4>
        </>
      ) : (
        <a href="#" onClick={() => setDisplayForm(!displayForm)}>
          <h2>Are you ready to start holding?</h2>
        </a>
      )}
      {console.log(displayForm)}
      {displayForm && (
        <TransactionForm
          crypto={crypto}
          user={auth.user}
          updateBalance={auth.updateBalance}
        />
      )}
    </>
  );
}

export default CryptoCard;
