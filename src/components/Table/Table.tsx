import { FC } from "react";
import classes from './Table.module.scss';
import ICurrencyPair from "../../models/ICurrency";

interface TableProps {
  pairs: ICurrencyPair[];
}

const Table: FC<TableProps> = ({ pairs }) => {
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
        {pairs.map((pair) => {
          return (
            <tr key={pair.baseCurrency + pair.quoteCurrency}>
              <td className={classes.td}>{pair.baseCurrency} / {pair.quoteCurrency}</td>
              <td className={classes.td}></td>
              <td className={classes.td}></td>
              <td className={classes.td}></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default Table;
