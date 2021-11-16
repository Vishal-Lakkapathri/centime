import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	expeditures: [],
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
		}
	},
});

export const {
	getExpendituresRequest,
	getExpendituresSuccess,
	getExpendituresFailure,
} = homeSlice.actions;

export default homeSlice.reducer;
