import React from 'react';
import { TodoItem } from 'src/interfaces';

import './Todos.styl';

interface TodosComponent {
  todos: TodoItem[];
  filter: string;
  setTagFilter: (filter: string) => void;
  removeTodo: (id: string | number) => void;
}

const DEFAULT_CLASSNAME = 'todos';
const NO_TODOS_TEXT = 'nothing todo at this moment';

export const Todos: React.FC<TodosComponent> = ({ todos, setTagFilter, filter, removeTodo }) => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <div className={`${DEFAULT_CLASSNAME}__title`}>
        <span className={`${DEFAULT_CLASSNAME}__title-text`}>{'Todos'}</span>
        {
          filter && <span>
            {`Filtered by ${filter}`}
            <span
              onClick={() => setTagFilter('')}
              className={`${DEFAULT_CLASSNAME}__title-remove-filter`}
            >
              {'remove filter'}
            </span>
          </span>
        }
      </div>
      <div className={`${DEFAULT_CLASSNAME}__container`}>
        {todos.length ? todos.map((todo) => {
          return (
            <div className={`${DEFAULT_CLASSNAME}__item`}>
              <div className={`${DEFAULT_CLASSNAME}__item-delete`} onClick={() => removeTodo(todo.id)}>remove</div>
              <span>{todo.title}</span>
              <div className={`${DEFAULT_CLASSNAME}__item-hashtags`}>
                {todo.hashtags.map((hashtag) =>
                  <span
                    className={`${DEFAULT_CLASSNAME}__item-hashtag`}
                    onClick={() => setTagFilter(hashtag)}
                  >
                    {hashtag}
                  </span>)}
              </div>
            </div>
          )
        }) : <span className={`${DEFAULT_CLASSNAME}__no-text`}>{NO_TODOS_TEXT}</span>}
      </div>
    </div>
  )
}