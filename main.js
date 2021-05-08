import './style.css';
import { createElement } from './utils/elements';

const header = createElement('header', {
  className: 'hero',
  children: [
    createElement('h1', {
      className: 'hero__title',
      innerText: 'TRONALD DUMP',
    }),
    createElement('img', {
      className: 'hero__img',
      src: 'img/donaldtrump.png',
    }),
  ],
});
const main = createElement('main', {
  className: 'main',
  children: [
    createElement('input', {
      className: 'input',
      placeholder: 'Search dumbest quotes',
      autofocus: true,
    }),
  ],
});

const footer = createElement('footer', {
  className: 'footer',
  children: [
    createElement('span', { innerText: 'Can`t get enough? ' }),
    createElement('a', {
      href: 'https://www.youtube.com/watch?v=wi3j1nqLAEA',
      innerText: 'Click here',
    }),
  ],
});

document.querySelector('#app').append(header, main, footer);
