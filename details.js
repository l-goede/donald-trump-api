import './styles.cc';
import styles from './details.module.css';
import { createElement } from './utils/elements';
import { getRandomQuote } from './utils/api';
import { createRandomQuoteDetail } from './components/quoteDetails';

const params = new URLSearchParams(location.random);
const quoteValue = params.get('_embedded.value');

getRandomQuote(quoteValue).then((response) => {
  const randomQuoteElment = createRandomQuoteDetail(response);
  mainSection.append(randomQuoteElment);
});
const mainSection = createElement('main', { className: styles.main });

document.querySelector('#app').append(mainSection);
