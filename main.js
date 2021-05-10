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
          if (quotes.length === 0) {
            const noResult = createElement('p', { innerText: 'no results' });
            mainSection.append(noResult);
            return;
          }
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
      href: '/random.html',
      // onclick: () => {
      //   getRandomQuote().then((randomQuote) => console.log(randomQuote));
      // },
      innerText: 'Click here',
    }),
  ],
});

document.querySelector('#app').append(header, mainSection, footer);
