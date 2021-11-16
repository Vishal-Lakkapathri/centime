import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'

import rootSagas from './rootSagas'
import rootReducer from './rootReducers'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
	reducer: rootReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSagas)
