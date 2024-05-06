import Currency from "./types";

interface ICurrencyData {
  rates: {
    [key in Currency]: number;
  };
  timestamp: number;
  base: 'CUPCAKE';
  date: string;
}

export default ICurrencyData;
