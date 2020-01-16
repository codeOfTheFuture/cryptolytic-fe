import axios from "axios";

export const FETCH_CHARTDATA_START = "FETCH_CHARTDATA_START";
export const FETCH_CHARTDATA_SUCCESS = "FETCH_CHARTDATA_SUCCESS";
export const FETCH_CHARTDATA_FAILURE = "FETCH_CHARTDATA_FAILURE";

export const getChartData = fields => dispatch => {
  console.log(fields);
  const { exchange, trading_pair, timeFrame } = fields;
  dispatch({ type: FETCH_CHARTDATA_START });
  axios
    .post(
      `https://cryptolytics-sample-ds.herokuapp.com/liveDataRoute/getDataBy${timeFrame}`,
      { exchange, trading_pair }
    )
    .then(res => {
      console.log(res.data.data);
      dispatch({ type: FETCH_CHARTDATA_SUCCESS, payload: res.data.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_CHARTDATA_FAILURE, payload: err });
    });
};

export const SET_OPTIONS_START = "SET_OPTIONS_START";

export const setOptions = options => dispatch => {
  console.log(options);
  dispatch({ type: SET_OPTIONS_START, payload: options });
};
