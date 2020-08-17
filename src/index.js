import './css/styles.css';
import refs from './JS/refs';
import { updateHtml } from './JS/updateHtml';
import { updateHtmlList } from './JS/updateHtml';
import fetchCountries from './JS/fetchCountries';
const debounce = require('lodash.debounce');
import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

refs.input.addEventListener(
  'input',
  debounce(event => {
    fetchCountries(event.target.value).then(countriesArray => {
      if (countriesArray.length === 1) {
        pageRefresh(refs);
        updateHtml(countriesArray);
      } else if (countriesArray.length >= 2 && countriesArray.length <= 10) {
        pageRefresh(refs);
        updateHtmlList(countriesArray);
      } else {
        error({
          text: 'Too many matches found. Please enter a more specific query!',
          delay: 2000,
        });
        pageRefresh(refs);
      }
    });
  }, 500),
);

function pageRefresh(refs) {
  refs.countryBox.innerHTML = '';
  refs.listCountries.innerHTML = '';
}
