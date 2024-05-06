import { FC, useEffect, useState } from "react";
import axios from 'axios';
import Logo from "./Logo/Logo";
import Table from "./Table/Table";
import ICurrencyPair from "../models/ICurrencyPair";
import ICurrencyData from "../models/ICurrencyData";
import logo from "../assets/cupcake_logo.png";

const App: FC = () => {
  const [firstData, setFirstData] = useState<ICurrencyData>({
    rates: { RUB: NaN, USD: NaN, EUR: NaN },
    timestamp: 0,
    base: 'CUPCAKE',
    date: '',
  });

  const [secondData, setSecondData] = useState<ICurrencyData>({
    rates: { RUB: NaN, USD: NaN, EUR: NaN },
    timestamp: 0,
    base: 'CUPCAKE',
    date: '',
  });

  const [thirdData, setThirdData] = useState<ICurrencyData>({
    rates: { RUB: NaN, USD: NaN, EUR: NaN },
    timestamp: 0,
    base: 'CUPCAKE',
    date: '',
  });

  const pairs: ICurrencyPair[] = [
    { baseCurrency: 'RUB', quoteCurrency: 'CUPCAKE' },
    { baseCurrency: 'USD', quoteCurrency: 'CUPCAKE' },
    { baseCurrency: 'EUR', quoteCurrency: 'CUPCAKE' },
    { baseCurrency: 'RUB', quoteCurrency: 'USD' },
    { baseCurrency: 'RUB', quoteCurrency: 'EUR' },
    { baseCurrency: 'EUR', quoteCurrency: 'USD' },
  ];

  useEffect(() => {
    const fetchData = async (endpoint: string, setData: React.Dispatch<React.SetStateAction<ICurrencyData>>) => {
      try {
        const response = await axios.get<ICurrencyData>(endpoint, {
          timeout: 0,
        });
        setData(response.data);
        fetchData(endpoint, setData);
      } catch (error) {
        console.error('Error fetching data:', error);
        fetchData(endpoint, setData);
      }
    };

    fetchData('http://localhost:3000/api/v1/first/poll', setFirstData);
    fetchData('http://localhost:3000/api/v1/second/poll', setSecondData);
    fetchData('http://localhost:3000/api/v1/third/poll', setThirdData);

    return () => {};
  }, []);

  return (
    <>
      <Logo src={logo} width={300} />
      <Table
        pairs={pairs}
        firstData={firstData}
        secondData={secondData}
        thirdData={thirdData}
      />
    </>
  );
};

export default App;
