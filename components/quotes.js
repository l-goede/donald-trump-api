import './quotes.css';
import { createElement } from '../utils/elements';

export function createQuoteElement({ value }) {
  return createElement('div', {
    className: 'quote-card',
    children: [createElement('p', { className: 'quote', innerText: value })],
  });
}
