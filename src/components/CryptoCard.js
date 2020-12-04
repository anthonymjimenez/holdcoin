import React, { useEffect, useState } from "react";
import { useAuth } from "../context/use-auth";
import { showurl, isoId, owned, financial, find, totalSizePerCrypto, totalSpendPerCrypto, averageCost} from "../utils/utils";
import { useLocation } from "react-router-dom";
import TransactionForm from "./TransactionForm";

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
} from "reactstrap";

import { Bar } from "react-chartjs-2";

function CryptoCard(props) {
  const auth = useAuth();
  const [crypto, setCrypto] = useState({});
  const [displayForm, setDisplayForm] = useState(false);
  const [userData, setUserData] = useState({})
  const location = useLocation();

  let chartExample3 = {
    data: canvas => {
      let ctx = canvas.getContext("2d");
  
      let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
      gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
      gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
  
      return {
        labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
        datasets: [
          {
            label: "Countries",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#d048b6",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [53, 20, 10, 80, 100, 45]
          }
        ]
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              suggestedMin: 60,
              suggestedMax: 120,
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(225,78,202,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }
        ]
      }
    }
  };
  
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
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <img
        src={crypto?.logo_url}
        alt={crypto?.symbol + "logo"}
        width="300"
        height="300"
      />
      <h3>{crypto.name}({crypto.symbol})</h3>
      <h3>Current Price: {crypto.price}</h3>
      <h3>All-Time High: ${financial(crypto.high)} was set on {crypto.high_timestamp?.split('T')[0]}</h3>
      <h3>Year to Date Returns: {financial(crypto.ytd?.price_change_pct * 100)}% </h3>
      <h3>Thirty Day Returns: {financial(crypto['30d']?.price_change_pct * 100)}% </h3> 

      <h3>Market Cap: ${crypto.market_cap}</h3>
      {console.log(crypto)}

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
    <Card className="card-chart">
      <CardHeader>
        <h5 className="card-category">Daily Sales</h5>
        <CardTitle tag="h3">
          <i className="tim-icons icon-delivery-fast text-primary" />{" "}
          3,500€
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div className="chart-area">
          <Bar
            data={chartExample3?.data}
            options={chartExample3?.options}
          />
        </div>
      </CardBody>
    </Card>
    </>
  );
}

export default CryptoCard;
