import { FC, useEffect, useState } from "react";
import Logo from "./Logo/Logo";
import logo from "../assets/cupcake_logo.png";
import Table from "./Table/Table";
import ICurrencyPair from "../models/ICurrency";

const App: FC = () => {
  const pairs: ICurrencyPair[] = [
    { baseCurrency: 'RUB', quoteCurrency: 'CUPCAKE' },
    { baseCurrency: 'USD', quoteCurrency: 'CUPCAKE' },
    { baseCurrency: 'EUR', quoteCurrency: 'CUPCAKE' },
    { baseCurrency: 'RUB', quoteCurrency: 'USD' },
    { baseCurrency: 'RUB', quoteCurrency: 'EUR' },
    { baseCurrency: 'EUR', quoteCurrency: 'USD' },
  ];

  return (
    <>
      <Logo src={logo} width={300} />
      <Table pairs={pairs} />
    </>
  );
};

export default App;
