import React from "react";
import TodoStateProvider, { useTodos } from "../../app/TodoProvider";
import { columns, DataTable, TodoForm, UserNav } from "./index";

function TodoContent() {
  const { todos } = useTodos();

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex w-full align-self-start">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
        <div className="flex items-center space-x-2">
          {/* WIP */}
          {/* <UserNav /> */}
        </div>
      </div>
      <TodoForm />
      <DataTable data={todos} columns={columns} />
    </div>
  );
}

function Todo() {
  return (
    <TodoStateProvider>
      <TodoContent />
    </TodoStateProvider>
  );
}

export default Todo;
