type Currency = 'RUB' | 'USD' | 'EUR' | 'CUPCAKE';

interface ICurrencyPair {
  baseCurrency: Currency;
  quoteCurrency: Currency
}

export default ICurrencyPair;
