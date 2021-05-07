import './style.css';
import { createElement } from './utils/elements';

const header = createElement('header', {
  className: 'hero',
  children: [
    createElement('h1', {
      className: 'hero__title',
      innerText: 'TRONALD DUMP',
    }),
  ],
});
const main = createElement('main', {
  className: 'main',
  children: [
    createElement('input', {
      className: 'input',
      placeholder: 'Search for dumbest quotes...',
      autofocus: true,
    }),
  ],
});

const footer = createElement('footer', {
  className: 'footer',
  children: [createElement('span', { innerText: 'Made with stupidity ' })],
});

document.querySelector('#app').append(header, main, footer);
