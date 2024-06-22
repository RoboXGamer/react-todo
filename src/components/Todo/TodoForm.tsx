import React from "react";
import { useTodos } from "../../app/TodoProvider";
import { taskSchema as TodoSchema } from "./schema";
import { labels, priorities, statuses } from "./data";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function TodoForm() {
  const { todos, setTodos } = useTodos();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const taskTitle = form.get("todo") as string;
    const newTodo = TodoSchema.parse({
      id: Date.now().toString(),
      title: taskTitle,
      status: statuses.find((s) => s.value === "todo")?.value,
      label: labels.find((l) => l.value === "bug")?.value,
      priority: priorities.find((p) => p.value === "low")?.value,
    });

    setTodos([...todos, newTodo]);

    e.currentTarget.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          placeholder="Add a todo"
          name="todo"
          className="md:w-1/2 lg:1/2 "
        />
        <Button type="submit">Add</Button>
      </form>
    </>
  );
}

export default TodoForm;
