import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
	reducerPath: 'tasksApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://todo.egacloud.ru/api/v1' }),
	endpoints: (builder) => ({
		getTasks: builder.query({ query: () => '/tasks' }),
		addTask: builder.mutation({ query: (task) => ({ url: '/tasks', method: 'POST', body: task }) }),
		updateTask: builder.mutation({ query: ({ id, ...task }) => ({ url: `/tasks/${id}`, method: 'PUT', body: task }) }),
		deleteTask: builder.mutation({ query: (id) => ({ url: `/tasks/${id}`, method: 'DELETE' }) }),
	}),
});

export const { useGetTasksQuery, useAddTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation } = tasksApi;
