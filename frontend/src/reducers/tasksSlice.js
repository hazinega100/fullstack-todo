import { createSlice } from '@reduxjs/toolkit';
import { tasksApi } from '../api/tasksApi';

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: [],
	reducers: {},
	extraReducers: (builder) => {
		builder.addMatcher(tasksApi.endpoints.getTasks.matchFulfilled, (state, { payload }) => {
			return payload;
		});
	},
});

export default tasksSlice.reducer;
