import * as reducers from './reducers';
import * as epics from './epics';
import { configureStore, AnyAction, combineReducers } from '@reduxjs/toolkit';
import {
  TypedUseSelectorHook,
  useDispatch as useReactReduxDispatch,
  useSelector as useReactReduxSelector,
} from 'react-redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

const rootReducer = combineReducers(reducers);

export type BillespaceDomain = ReturnType<typeof rootReducer>;

const rootEpic = combineEpics(...Object.values(epics));

const epicMiddleware = createEpicMiddleware<
  AnyAction,
  AnyAction,
  ReturnType<typeof rootReducer>
>();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(epicMiddleware),
});

epicMiddleware.run(rootEpic);

type AppDispatch = typeof store.dispatch;

const useSelector: TypedUseSelectorHook<BillespaceDomain> =
  useReactReduxSelector;
const useDispatch = () => useReactReduxDispatch<AppDispatch>();

export { store, useSelector, useDispatch };
