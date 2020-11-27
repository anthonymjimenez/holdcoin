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
    owned: true,
  },
  {
    symbol: "ETH",
    holdPrice: 1000,
    stopLimit: 400,
    averageCost: 466,
    owned: true,
  },
];

export const isoId = (prop) => prop.split("/").slice(-1)[0];

export const appendUserInfo = (setCryptoData, user) => {
  setCryptoData((cryptoData) =>
    cryptoData.map((crypto) => {
      let userData = user.find(({ symbol }) => symbol == crypto.symbol);
      return userData ? { ...crypto, userData } : crypto;
    })
  );
};


