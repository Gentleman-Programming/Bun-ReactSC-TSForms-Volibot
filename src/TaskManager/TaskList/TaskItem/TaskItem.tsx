import { Button } from "@/components/ui/button";
import { useTaskContext } from "@/TaskManager/context/taskContext";
import type { Task } from "@/TaskManager/models/task";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { deleteTask } = useTaskContext();

  return (
    <li className="flex items-center justify-between border-b py-2">
      <span>{task.title}</span>
      <Button
        type="button"
        variant="secondary"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </Button>
    </li>
  );
};

export default TaskItem;
