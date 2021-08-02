import { combineReducers, createStore } from "redux";
import { ColorReducer } from "./reducers/ColorReducer"

const rootReducer = combineReducers({
    ColorReducer,
});

const store = createStore (rootReducer);
export default store ;