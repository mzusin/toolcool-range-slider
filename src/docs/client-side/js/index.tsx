import '../../../../dist/plugins/tcrs-binding-labels.min.js';
import '../../../../dist/toolcool-range-slider.min.js';
import { getSetValuesExample } from './examples';

const initMobileMenu = () => {
  const $btn = document.getElementById('mobile-menu-btn');
  if(!$btn) return;

  $btn.addEventListener('click', (evt) => {
    evt.stopPropagation();
    document.body.classList.toggle('mobile-menu-opened');
  });

  document.body.addEventListener('click', () => {
    document.body.classList.remove('mobile-menu-opened');
  });

  const $sideMenu = document.getElementById('side-menu');
  if(!$sideMenu) return;

  $sideMenu.addEventListener('click', (evt) => {
    evt.stopPropagation();
  });

  const $close = document.getElementById('mobile-menu-close-btn');
  if(!$close) return;

  $close.addEventListener('click', () => {
    document.body.classList.remove('mobile-menu-opened');
  });
};

const init = () => {
  initMobileMenu();
  getSetValuesExample();
};

document.addEventListener('DOMContentLoaded', () => {
  init();
});

export {};

/*import * as React from 'react';
import { createRoot } from 'react-dom/client';

const init = () => {
  const $root = document.getElementById('root') as HTMLElement;
  if(!$root) return;

  const root = createRoot($root);
  root.render(<h1>Hello, world!</h1>);
}

init();*/