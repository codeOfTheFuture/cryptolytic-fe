import React from "react";

import MarketIndexChart from "./MarketIndexChart"
import DashboardTable from "../DashboardTable"
import CompareControls from "./CompareControls"
import ViewControl from "./ViewControl"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

export default function MarketIndex() {
	const classes = useStyles();

	let deletedColumns = ['image', 'market_cap_rank', 'price_change_24h', 'market_cap_change_percentage_24h', 'circulating_supply', 'total_supply', 'ath', 'ath_change_percentage', 'roi', 'id', 'ath_date', 'last_updated', 'market_cap_change_24h']
	let orderedColumns = ['symbol', 'name', 'current_price'].reverse()
	let tradingPairArray = []
	let exchangeArray = []
	let percentageArray = [7]
	let fiatArray = [2, 5, 6]
	let cryptoArray = []
	let endpointUrl = ['https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cripple%2Ctether%2Cbitcoin-cash%2Cmonero%2Ceos&order=market_cap_desc&per_page=100&page=1&sparkline=false']
	let largeNumberArray = [3, 4]
	let tickerArray = [0]
	let tradeProps = { deletedColumns, orderedColumns, tradingPairArray, exchangeArray, percentageArray, fiatArray, cryptoArray, endpointUrl, largeNumberArray, tickerArray }

	return (
		<div>
			<div style={{ display: 'flex', height: '100%' }}>
				<MarketIndexChart />
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', marginLeft: '3em', color: 'white' }}>
					<Typography style={{ fontSize: '1.4rem' }}>Compare</Typography>
					<CompareControls />
					<Typography style={{ fontSize: '1.4rem' }}>View</Typography>
					<ViewControl />
					<Button variant="outlined" color="primary" style={{ width: '60%', margin: '1em 0' }}>
						Clear
					</Button>
				</div>
			</div>
			<DashboardTable {...tradeProps} />
		</div>
	)
}