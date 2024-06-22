import React from "react";
interface TodoItemProps {
  todo: string;
}
function TodoItem({ todo }: TodoItemProps) {
  return (
    <>
      <li>{todo}</li>
    </>
  );
}

export default TodoItem;
