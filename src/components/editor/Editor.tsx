import React, {useState} from 'react'

import './Editor.styl';

const DEFAULT_CLASSNAME = 'editor';
const INPUT_PLACEHOLDER = 'todo text...';

export const Editor: React.FC = () => {
  const [textContent, setTextContent] = useState('');

  const onTextInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTextContent(event.target.value);
  }

  return (
    <div className={DEFAULT_CLASSNAME}>
      <label htmlFor={'text'}>Input your TODO</label>
      <div className={`${DEFAULT_CLASSNAME}__input-container`}>
        <input
          className={`${DEFAULT_CLASSNAME}__input`}
          id={'text'} value={textContent}
          onChange={(event) => onTextInput(event)}
          placeholder={INPUT_PLACEHOLDER}
        />
        <div className={`${DEFAULT_CLASSNAME}__btn`}>+</div>
      </div>
    </div>
  )
}