export const url =
  "https://api.nomics.com/v1/currencies/ticker?key=f5c83eef5bb0cc892333827fb4ebeefb&per-page=5&page=1";

export const showurl =
  "https://api.nomics.com/v1/currencies/ticker?key=f5c83eef5bb0cc892333827fb4ebeefb&ids=";

export const sampleUserData = [
  {
    symbol: "BTC",
    holdPrice: 20000,
    stopLimit: 10000,
    averageCost: 13400,
  },
  {
    symbol: "ETH",
    holdPrice: 1000,
    stopLimit: 400,
    averageCost: 466,
  },
];

export const isoId = (prop) => prop.split("/").slice(-1)[0];

export const appendUserInfo = (setCryptoData, user) => {
  setCryptoData((cryptoData) =>
    cryptoData.map((crypto) => {
      let userData = user.cryptos.find(({ symbol }) => symbol == crypto.symbol);
      return userData ? { ...crypto, userData } : crypto;
    })
  );
};

export const getUserFromToken = token => {
  if (token) {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      // ignore
    }
  }
  return null;
};

export const signInUser = async () => { 
    const token = localStorage.getItem("token"); // set user with token if(token & user=dne) <- that means token was set and page has been reset, in that case use token to fetch user
    // use auth routes to restrict all routes before token is set, then use token to render user
    if (token) {
      let resp = await fetch(`http://localhost:3000/api/v1/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    let data = await resp.json()
    return data
        //.then(appendUserInfo())
    }
}