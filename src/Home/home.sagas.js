// @flow
import type { Saga } from 'redux-saga';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import { getExpendituresService } from './home.services';

import {
	getExpendituresRequest,
	getExpendituresSuccess,
	getExpendituresFailure,
} from './home.slice';

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

export default function* homeSagas(): Saga<void> {
	yield all([takeLatest(getExpendituresRequest.toString(), getExpenditures)]);
}
