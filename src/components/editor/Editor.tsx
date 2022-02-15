import React, { useState } from 'react';

import './Editor.styl';

const DEFAULT_CLASSNAME = 'editor';
const INPUT_PLACEHOLDER = 'todo text...';

interface EditorComponent {
  addNewTodo: (todoTitle: string, todoHashtags: string[]) => void;
}

export const Editor: React.FC<EditorComponent> = ({ addNewTodo }) => {
  const [textContent, setTextContent] = useState<string>('');

  const newTodoHandler = () => {
    const tags = textContent
      .split(' ')
      .filter((item) => item.includes('#'))
      .map((tag) => tag.slice(1));

    addNewTodo(textContent, tags);
    setTextContent('');
  }

  return (
    <div className={DEFAULT_CLASSNAME}>
      <label htmlFor={'text'}>Input your TODO</label>
      <div className={`${DEFAULT_CLASSNAME}__input-container`}>
        <input
          className={`${DEFAULT_CLASSNAME}__input`}
          id={'text'} value={textContent}
          onChange={(event) => setTextContent(event.target.value)}
          placeholder={INPUT_PLACEHOLDER}
        />
        <div className={`${DEFAULT_CLASSNAME}__btn`} onClick={() => newTodoHandler()}>+</div>
      </div>
    </div>
  )
}