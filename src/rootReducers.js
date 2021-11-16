/* eslint-disable import/no-unresolved */
// @flow
import { combineReducers } from 'redux';

import homeReducer from './Home/home.slice';

export default combineReducers({
	home: homeReducer,
});
