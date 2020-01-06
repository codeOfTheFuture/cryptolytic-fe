import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  binanceColor: {
    color: "rgb(78, 185, 255)"
  },
  coinbaseColor: {
    color: "rgb(83, 207, 215)"
  },
  bitfinex: {
    color: "rgb(98, 227, 171)"
  }
});

const TableData = ({ item, positive, negative }) => {
  const classes = useStyles();

  if (positive && item >= 0) {
    return <td className={positive}>{item}</td>;
  } else if (negative && negative) {
    return <td className={negative}>{item}</td>;
  } else if (item === "Binance") {
    return <td className={classes.binanceColor}>{item}</td>;
  } else if (item === "Coinbase_pro") {
    return <td className={classes.coinbaseColor}>{item}</td>;
  } else if (item === "Bitfinex") {
    return <td className={classes.bitfinex}>{item}</td>;
  } else {
    return <td>{item}</td>;
  }
};

export default TableData;