import './style.css';
import styles from './details.module.css';
import { createElement } from './utils/elements';
import { getRandomQuote } from './utils/api';
import { createQuoteElement } from './components/quotes';

getRandomQuote().then((randomQuote) => {
  const randomQuoteElment = createQuoteElement(randomQuote);
  mainSection.append(randomQuoteElment);
});
const mainSection = createElement('main', { className: styles.main });

document.querySelector('#app').append(mainSection);
