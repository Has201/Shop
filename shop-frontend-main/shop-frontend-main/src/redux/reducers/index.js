import { combineReducers } from 'redux';

import filters from './filters';
import elecs from './elecs';
import cart from './cart';

const rootReducer = combineReducers({
  filters,
  elecs,
  cart,
});

export default rootReducer;
