import Currency from "./types";

interface ICurrencyPair {
  baseCurrency: Currency;
  quoteCurrency: Currency | 'CUPCAKE';
}

export default ICurrencyPair;
