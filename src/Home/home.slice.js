import { createSlice } from '@reduxjs/toolkit';

import { getSelectedLanguageCode } from './../i18n';
import { act } from "@testing-library/react";

const initialState = {
	isLoading: false,
	expenditures: [],
  languageCode: getSelectedLanguageCode(),
  category: {},
  deleteCategory: '',
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
    },
    setCategoryValues: (state: StateType, action: ActionType) => {
      state.category = action.payload
    },
    deleteCategoryValues: (state: StateType, action: ActionType) => {
      state.deleteCategory = action.payload
    }
	}
});

export const {
	getExpendituresRequest,
	getExpendituresSuccess,
	getExpendituresFailure,
  setLanguageCode,
  setCategoryValues,
  deleteCategoryValues
} = homeSlice.actions;

export default homeSlice.reducer;
