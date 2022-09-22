import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../model/Todo";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: Props) {
  return (
    // <div className="todos">
    //   {todos.map((t) => (
    //     <SingleTodo todo={t} key={t.id} todos={todos} setTodos={setTodos} />
    //   ))}
    // </div>

    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            {todos.map((t, index) => (
              <SingleTodo
                index={index}
                todo={t}
                key={t.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            className={`todos remove ${
              snapshot.isDraggingOver ? "dragcomplete" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">CompletedTasks</span>
            {completedTodos.map((t, index) => (
              <SingleTodo
                index={index}
                todo={t}
                key={t.id}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TodoList;
