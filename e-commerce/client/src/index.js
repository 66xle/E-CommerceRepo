import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import sessionStorage from 'redux-persist/es/storage/session';

import gameReducer from './slices/gameSlice';
import cartReducer from './slices/cartSlice';
import './index.css';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
}

const rootReducer = combineReducers({
  game: gameReducer,
  cart: cartReducer,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
});

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store= {store}>
    <PersistGate loading={null} persistor={persistor} >
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
