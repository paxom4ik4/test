import React from 'react';

import './app.styl';
import {Editor} from "../components/editor/Editor";

const DEFAULT_CLASSNAME = 'app';

export const App: React.FC = () => {
  return (
    <div className={DEFAULT_CLASSNAME}>
      <span className={`${DEFAULT_CLASSNAME}__title`}>Text Editor with #tags</span>
      <Editor />
    </div>
  )
}
