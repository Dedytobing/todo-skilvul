import { configureStore } from "@reduxjs/toolkit";
import { myReducer } from "./Reducer";

const store = configureStore({ reducer: myReducer });

export default store;