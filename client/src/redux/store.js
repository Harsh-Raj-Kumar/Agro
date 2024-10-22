import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from "redux-thunk";
import userReducer from "./reducers/user.reducer";

const rootReducer = combineReducers({
    user : userReducer,
})

export const Store = createStore(rootReducer,applyMiddleware(thunk));