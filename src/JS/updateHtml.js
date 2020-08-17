import refs from '../JS/refs';
import countryTpl from '../templates/country.hbs';
import coutriesTpl from '../templates/countries.hbs';

export function updateHtml(country) {
  const markUp = countryTpl(country);
  refs.countryBox.insertAdjacentHTML('beforeend', markUp);
}
export function updateHtmlList(countries) {
  const markUpList = coutriesTpl(countries);
  refs.listCountries.insertAdjacentHTML('beforeend', markUpList);
}
