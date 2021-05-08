import './style.css';
import { createElement, removeAllChildren } from './utils/elements';
import { getQuotes } from './utils/api';
import { createQuoteElement } from './components/quotes';

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
    createElement('input', {
      className: 'input',
      placeholder: 'Search dumbest quote',
      autofocus: true,
      onchange: (event) => {
        removeAllChildren(mainSection);

        const search = event.target.value;
        getQuotes(search).then((quotes) => {
          const quotesElements = quotes.map(createQuoteElement);
          mainSection.append(...quotesElements);
        });
      },
    }),
  ],
});
const mainSection = createElement('main', { className: 'results' });

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

document.querySelector('#app').append(header, mainSection, footer);
