//reducers is just a pure function
import { combineReducers } from 'redux';
import { addCountry, deleteCountry } from './countriesReducers';

const rootReducer = combineReducers({
	addCountry,
	deleteCountry
});

export default rootReducer;