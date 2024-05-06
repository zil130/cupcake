import { FC } from "react";
import classes from './Table.module.scss';
import ICurrencyPair from "../../models/ICurrencyPair";
import ICurrencyData from "../../models/ICurrencyData";

interface TableProps {
  pairs: ICurrencyPair[];
  firstData: ICurrencyData;
  secondData: ICurrencyData;
  thirdData: ICurrencyData;
}

const Table: FC<TableProps> = ({
  pairs,
  firstData,
  secondData,
  thirdData
}) => {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th className={classes.td}>Pair name / market</th>
          <th className={classes.td}>First</th>
          <th className={classes.td}>Second</th>
          <th className={classes.td}>Third</th>
        </tr>
      </thead>
      <tbody>
        {pairs.map(({ baseCurrency, quoteCurrency }) => {
          const data = {
            first: quoteCurrency === 'CUPCAKE'
              ? firstData.rates[baseCurrency]
              : firstData.rates[baseCurrency] / firstData.rates[quoteCurrency],
            second: quoteCurrency === 'CUPCAKE'
              ? secondData.rates[baseCurrency]
              : secondData.rates[baseCurrency] / secondData.rates[quoteCurrency],
            third: quoteCurrency === 'CUPCAKE'
              ? thirdData.rates[baseCurrency]
              : thirdData.rates[baseCurrency] / thirdData.rates[quoteCurrency],
          };

          return (
            <tr key={baseCurrency + quoteCurrency}>
              <td className={classes.td}>{baseCurrency} / {quoteCurrency}</td>
              <td className={classes.td}>
                {isNaN(data.first) ? '---' : parseFloat(data.first.toFixed(2))}
              </td>
              <td className={classes.td}>
                {isNaN(data.second) ? '---' : parseFloat(data.second.toFixed(2))}
              </td>
              <td className={classes.td}>
                {isNaN(data.third) ? '---' : parseFloat(data.third.toFixed(2))}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default Table;
