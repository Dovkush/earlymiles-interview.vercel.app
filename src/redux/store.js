import { createStore, applyMiddleware } from "redux";
// import counterReducer from "../features/Components/counterSlice";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));
