import React from "react";
import useLocalStorage from "use-local-storage";
import { delay } from "../helpers/utils";
import { TASKS_KEY, TaskState, type Task } from "../models/task";

export default function useTasks() {
	const [tasksData] = useLocalStorage<Task[]>(TASKS_KEY, []);
	const [tasks, setTasks] = React.useState<Task[]>([]);
	const [isLoadingTasks, setisLoadingTasks] = React.useState(true);

	async function fetchTasks() {
		if (isLoadingTasks) {
			await delay(2000);
			setisLoadingTasks(false);
		}
		setTasks(tasksData);
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	React.useEffect(() => {
		fetchTasks();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tasksData]);

	return {
		tasks,
		createdTasksCount: tasks.filter((task) => task.state === TaskState.Created)
			.length,
		concludedTasksCount: tasks.filter((task) => task.concluded).length,
		isLoadingTasks,
	};
}
