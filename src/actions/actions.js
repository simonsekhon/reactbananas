import axios from 'axios';

import {
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_REQUEST,
  BASE_URL,
} from '../constants/constants';

const fetchDataRequest = () => ({
    type: FETCHING_DATA_REQUEST
});

const fetchDataSuccess = (data, msg) => ({
    type: FETCHING_DATA_SUCCESS,
    message: msg,
    data,
});

const fetchDataFailure = (err) => ({
    type: FETCHING_DATA_FAILURE,
    errMessage: err
});


export const buyBananas = (number, buyDate) => {

  return function(dispatch) {
    dispatch(fetchDataRequest());

    return axios.post(BASE_URL, { number: Number(number), buyDate })
     .then(res => {
       dispatch(fetchDataSuccess())
     }).catch(error => {
    dispatch(fetchDataFailure("error with ordering bananas. Please try again"));
      });
    };
  };

export const sellBananas = (number, sellDate) => {
  return function(dispatch) {
    dispatch(fetchDataRequest());

    return axios.put(BASE_URL, { number: Number(number), sellDate })
     .then(res => {
       dispatch(fetchDataSuccess())
     }).catch(error => {
    dispatch(fetchDataFailure("error with ordering bananas. Please try again"));
      });
    };
};

export const getMetrics = (number, sellDate) => {
  return function(dispatch) {
    dispatch(fetchDataRequest());

    return axios.get(BASE_URL)
     .then(res => {
       dispatch(fetchDataSuccess(res.data))
     }).catch(error => {
    dispatch(fetchDataFailure("error with ordering bananas. Please try again"));
      });
    };
};
