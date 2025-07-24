import PlusIcon from "../assets/icons/plus.svg?react";
import Button from "../components/button";
import useTask from "../hooks/useTask";
import useTasks from "../hooks/useTasks";
import { TaskState, type Task } from "../models/task";
import TaskItem from "./taskItem";

export default function TasksList() {
  const { tasks, isLoadingTasks } = useTasks();
  const { prepareTask } = useTask();

  function handleNewTask() {
    prepareTask();
  }
  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className="w-full"
          onClick={handleNewTask}
          disabled={
            tasks.some((task) => task.state === TaskState.Creating) ||
            isLoadingTasks
          }
        >
          Nova tarefa
        </Button>
      </section>
      <section className="space-y-2">
        {!isLoadingTasks &&
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} loading={isLoadingTasks} />
          ))}
        {isLoadingTasks && (
          <>
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
            <TaskItem task={{} as Task} loading />
          </>
        )}
      </section>
    </>
  );
}
