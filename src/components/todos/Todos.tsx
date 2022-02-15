import React from 'react';
import { TodoItem } from 'src/interfaces';

import './Todos.styl';

interface TodosComponent {
  todos: TodoItem[];
}

const DEFAULT_CLASSNAME = 'todos';

export const Todos: React.FC<TodosComponent> = ({ todos }) => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <span className={`${DEFAULT_CLASSNAME}__title`}>{'todo:'}</span>
    </div>
  )
}