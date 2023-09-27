import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todos from "./todos";
import { dynamicReducer } from "../hooks/useReduxState";

const rootReducer = combineReducers({
  todos: todos.reducer,
  dynamic: dynamicReducer
});

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;
