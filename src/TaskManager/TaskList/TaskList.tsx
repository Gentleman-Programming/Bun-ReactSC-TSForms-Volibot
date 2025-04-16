import { Suspense } from "react";
import { useTaskContext } from "../context/taskContext";
import TaskItem from "./TaskItem/TaskItem";

function Fetch() {
  const { tasks } = useTaskContext();

  return (
    <ul className="list-disc pl-5">
      {tasks.map((task: { id: number; title: string }) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </ul>
  );
}

function TaskList() {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <Fetch />
    </Suspense>
  );
}

export default TaskList;
