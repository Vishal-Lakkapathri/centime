// @flow
import type { Saga } from 'redux-saga';
import { takeLatest, call, put, all, select } from 'redux-saga/effects';

import { getExpendituresService } from './home.services';

import {
	getExpendituresRequest,
	getExpendituresSuccess,
	getExpendituresFailure,
	setCategoryValues,
	deleteCategoryValues,
} from './home.slice';

const getExpendituresFromState = (state) => state.home.expenditures;

function* getExpenditures(): Saga<void> {
	try {
		const response = yield call(getExpendituresService);
		if (response.status === 'success') {
			return yield put(getExpendituresSuccess(response.data));
		}
		return yield put(getExpendituresFailure('Error'));
	} catch (e) {
		return yield put(getExpendituresFailure(e.message));
	}
}

function* setExpenditures({ payload }): Saga<void> {
	const expenditures = yield select(getExpendituresFromState);
	const { fromCategory, toCategory, weight } = payload;
	return yield put(getExpendituresSuccess([...expenditures, [fromCategory, toCategory, weight]]));
}

function* deleteCategory({ payload }): Saga<void> {
	const expenditures = yield select(getExpendituresFromState);
	const { deleteCategoryValue } = payload;
	const formattedValues = expenditures.filter(
		(val) => val[0] !== deleteCategoryValue && val[1] !== deleteCategoryValue
	);
	return yield put(getExpendituresSuccess(formattedValues));
}

export default function* homeSagas(): Saga<void> {
	yield all([
		takeLatest(getExpendituresRequest.toString(), getExpenditures),
		takeLatest(setCategoryValues.toString(), setExpenditures),
		takeLatest(deleteCategoryValues.toString(), deleteCategory),
	]);
}
