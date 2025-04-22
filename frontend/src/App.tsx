import React from "react";
import {useGetTasksQuery, useAddTaskMutation, useDeleteTaskMutation} from "./api/tasksApi";
import {Title} from "./components/Title";
import {Button} from "./components/Button";

function App() {
    // @ts-ignore
    const {data: tasks, refetch} = useGetTasksQuery();
    const [addTask] = useAddTaskMutation();
    const [deleteTask] = useDeleteTaskMutation();

    const handleAddTask = () => {
        addTask({title: "New Task"}).then(refetch);
    };

    const handleDeleteTask = (id: number) => {
        deleteTask(id).then(refetch);
    };

    return (
        <div>
            <Title>To-Do List Git</Title>
            <Button onClick={handleAddTask}>Add Task</Button>
            <ul>
                {tasks?.map((task: any) => (
                    <li key={task.id}>
                        {task.title}
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
