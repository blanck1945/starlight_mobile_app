import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
//import logger from "./middleware/logger";
import rootReducer from "./reducers/rootReducer";

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

export const store = createStore(rootReducer, middlewareEnhancer);
