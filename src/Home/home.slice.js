import { createSlice } from '@reduxjs/toolkit';

import { getSelectedLanguageCode } from './../i18n';

const initialState = {
	isLoading: false,
	expenditures: [],
  languageCode: getSelectedLanguageCode()
};

export const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		getExpendituresRequest: (state: StateType) => {
			state.isLoading = true;
		},
		getExpendituresSuccess: (state: StateType, action: ActionType) => {
			state.isLoading = false;
			state.expenditures = action.payload;
		},
		getExpendituresFailure: (state: StateType) => {
			state.isLoading = false;
		},
    setLanguageCode: (state: StateType, action: ActionType) => {
      state.languageCode = action.payload
    }
	},
});

export const {
	getExpendituresRequest,
	getExpendituresSuccess,
	getExpendituresFailure,
  setLanguageCode,
} = homeSlice.actions;

export default homeSlice.reducer;
