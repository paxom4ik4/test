import React, { useState, useEffect } from 'react';

import './app.styl';
import { Editor } from "../components/editor/Editor";
import { Todos } from "../components/todos/Todos";

import { TodoItem } from "../interfaces";
import todos from '../todos.json';

const DEFAULT_CLASSNAME = 'app';

export const App: React.FC = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [tagFilter, setTagFilter] = useState<string>('');

  useEffect(() => setTodoItems(todos), []);

  const addNewTodo = (todoTitle: string, todoHashtags: string[]): void => {
    setTodoItems((todos) => [...todos, {
      id: todoItems.length,
      title: todoTitle,
      hashtags: todoHashtags
    }]);
  };

  const removeTodo = (id: number | string) => {
    const updatedTodos = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(updatedTodos);
  };

  const filteredItems = (): TodoItem[] => todoItems.filter((todo) => todo.hashtags.includes(tagFilter));

  return (
    <div className={DEFAULT_CLASSNAME}>
      <span className={`${DEFAULT_CLASSNAME}__title`}>Text Editor with #tags</span>
      <Editor addNewTodo={addNewTodo} />
      <Todos
        todos={tagFilter ? filteredItems() : todoItems}
        setTagFilter={setTagFilter}
        filter={tagFilter}
        removeTodo={removeTodo}
      />
    </div>
  )
}
