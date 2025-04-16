import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList/TaskList";

const TaskManager = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <h2>Task Form</h2>
      <TaskForm />

      <h2>Task List</h2>
      <TaskList />
    </div>
  );
};

export default TaskManager;
