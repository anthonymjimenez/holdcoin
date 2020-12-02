export const url =
  "https://api.nomics.com/v1/currencies/ticker?key=f5c83eef5bb0cc892333827fb4ebeefb&per-page=5&page=1";

export const showurl =
  "https://api.nomics.com/v1/currencies/ticker?key=f5c83eef5bb0cc892333827fb4ebeefb&ids=";

export const backendAPI =
  "http://localhost:3000/api/v1/";

export const isoId = (prop) => prop.split("/").slice(-1)[0];

export const appendUserInfo = (setCryptoData, user) => {
  setCryptoData((cryptoData) =>
    cryptoData.map((crypto) => {
      let userData = user.cryptos.find(({ symbol }) => symbol == crypto.symbol);
      return userData ? { ...crypto, userData } : crypto;
    })
  );
};

export const owned = (crypto, user) => {
  return user.cryptos.some(c => c.symbol === crypto.symbol)
}