export const url =
  "https://api.nomics.com/v1/currencies/ticker?key=f5c83eef5bb0cc892333827fb4ebeefb&per-page=5&page=1";

export const showurl =
  "https://api.nomics.com/v1/currencies/ticker?key=f5c83eef5bb0cc892333827fb4ebeefb&ids=";

export const backendAPI = "http://localhost:3000/api/v1/";

export const isoId = (prop) => prop.split("/").slice(-1)[0];

export const appendUserInfo = (setCryptoData, user) => {
  setCryptoData((cryptoData) =>
    cryptoData.map((crypto) => {
      let userData = user.cryptos.find(({ symbol }) => symbol === crypto.symbol);
      return userData ? { ...crypto, userData } : crypto;
    })
  );
};

export const owned = (crypto, user) => {
  return user.cryptos.some((c) => c.symbol === crypto.symbol);
};

export function find(crypto, user) {
  return user.cryptos.find((c) => c.symbol === crypto.symbol);
}

export const financial = (x) => Number.parseFloat(x).toFixed(2);

export const getUnique = (arr, index = "symbol") => {
  return arr
    .map((e) => e[index])

    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter((e) => arr[e])
    .map((e) => arr[e]);

};

export function totalSpendPerCrypto(user, crypto) {
  return user.transactions.filter(t => t.symbol === crypto.symbol).reduce((sum, t) => sum + t.totalPrice, 0);
}

export function totalSpend(user) {
  return user.transactions.reduce((sum, t) => sum + t.totalPrice, 0) ;
}

export function totalSizePerCrypto(user, crypto) {
 let filter = user.transactions.filter(t => t.symbol === crypto.symbol)
 return filter.reduce((sum, t) => { return sum + t.size}, 0)
}

export function totalSize(user) {
  return user.transactions.reduce((sum, t) => sum + t.size, 0);
}

export function averageCost(user, crypto ) {
  return totalSpendPerCrypto(user,crypto) / totalSizePerCrypto(user,crypto)
}
// export function averagePrice(user, crypto) {
//   const matchedCryptos = user.cryptos.filter(c => c?.symbol === crypto.symbol)
//   return matchedCryptos.reduce((sum, t) => sum + t.size, 0) / matchedCryptos.length
// }
