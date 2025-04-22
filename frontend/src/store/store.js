import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../reducers/tasksSlice";
import {tasksApi} from "../api/tasksApi";

const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		[tasksApi.reducerPath]: tasksApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(tasksApi.middleware),
});

export default store;
