import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from "redux-saga";
import { persistConfig } from './settings';
import { logger } from "redux-logger";
import rootReducer from "../reducers";
import rootSaga from "../sagas";

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const middewares = [
    // Add other middleware on this line...

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    sagaMiddleware,
    logger
  ];

  let store = createStore(persistedReducer,
    initialState,
    compose(
      applyMiddleware(...middewares)
    ));
  let persistor = persistStore(store);
  
  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}
