/* eslint-disable import/no-unresolved */
// @flow
import type { Saga } from 'redux-saga';
import { all } from 'redux-saga/effects';

import homeSagas from './Home/home.sagas';

export default function* rootSagas(): Saga<void> {
	yield all([homeSagas()]);
}
