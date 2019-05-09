import {
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_REQUEST
} from '../constants/constants';

function convertMS( date ) {
    let newDate = new Date();
    let purchaseDate = new Date(date);
    let milliseconds = newDate - purchaseDate;
    let day, hour, minute, seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    hour = Math.floor(minute / 60);
    day = Math.floor(hour / 24);

    return day;
}

const initialState = {
  ui: {
    fetching: false,
    error: false,
    success: false,
  },
  data: {

  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA_SUCCESS: {
      if(action.data) {
        let unexipiredBananas = [];
        let exipiredBananas = [];
        let soldBananas = [];
        action.data.map(item => {
          if(item.sellDate) {
            soldBananas.push(item);
          }
          if(convertMS(item.buyDate) < 10) {
            unexipiredBananas.push(item);
          } else {
            exipiredBananas.push(item);
          }
        })
        return {
          ...state,
          ui: {
            ...state.ui,
            fetching: false,
          },
          data: {
            ...state.data,
            bananas: action.data,
            exBananas: exipiredBananas,
            unExBananas: unexipiredBananas,
            soldBananas,
          }
        }
      } else {
        return {
          ...state,
          ui: {
            ...state.ui,
            fetching: false,
            success: "SUCCESS"
          }
        }
      }
    }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,

      }
    case FETCHING_DATA_REQUEST:
      return {
        ...state,
        ui: {
          ...state.ui,
          fetching: true
        }
      }
    default:
      return state
  }
}
