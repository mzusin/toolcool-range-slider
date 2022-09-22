import * as React from 'react';
import { createRoot } from 'react-dom/client';

const init = () => {
  const $root = document.getElementById('root') as HTMLElement;
  if(!$root) return;

  const root = createRoot($root);
  root.render(<h1>Hello, world!</h1>);
}

init();