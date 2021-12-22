import { combineReducers } from "redux";
import counterReducer from "./phonebook/phonebook-reducers";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  // persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

// import AsyncStorage from "@react-native-async-storage/async-storage";

// const counterPersistConfig = {
//   key: "my_contacts",
//   version: 1,
//   storage: AsyncStorage,
//   blacklist: ["filter"],
// };

// const rootReducer = combineReducers({
//   counter: persistReducer(counterPersistConfig, counterReducer),
// });

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export default store;
