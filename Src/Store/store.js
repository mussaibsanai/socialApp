import AsyncStorage from "@react-native-community/async-storage";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import logger from "redux-logger";
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";
import AuthReducer from "./reducer/AuthReducer";
import MainReducer from "./reducer/MainReducer";

const rootReducer = combineReducers({
    AuthReducer : AuthReducer,
    MainReducer : MainReducer,
});

const presistedConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

const presistedReducer = persistReducer(presistedConfig, rootReducer);
const initialState = {};

const middleware = [thunk, logger];

const store = createStore(
    presistedReducer, 
    initialState, 
    compose(applyMiddleware(...middleware)),
);

const presistor = persistStore(store);

export {presistor, store};