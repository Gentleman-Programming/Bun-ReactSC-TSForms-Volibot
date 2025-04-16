import { minLength, object, pipe, string } from "valibot";
import { useForm } from "@tanstack/react-form";
import FormInput from "@/components/ui/form-input";
import type { Task } from "../models/task";
import { useTaskContext } from "../context/taskContext";
import { Button } from "@/components/ui/button";

const TaskSchema = object({
  title: pipe(
    string(),
    minLength(3, "El título debe tener al menos 3 caracteres"),
  ),
});

const TaskForm = () => {
  const { addTask } = useTaskContext();

  const form = useForm({
    defaultValues: {
      title: "",
    },
    validators: {
      onChange: TaskSchema,
    },
    onSubmit: ({ value }) => {
      const newTask: Task = { id: Date.now(), title: value.title };
      addTask(newTask);
      form.reset();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="mb-4"
    >
      <form.Field
        name="title"
        children={(field) => <FormInput label="Nueva Tarea" field={field} />}
      />

      <Button type="submit" variant="secondary">
        Agregar
      </Button>
    </form>
  );
};

export default TaskForm;
