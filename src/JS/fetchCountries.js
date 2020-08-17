function fetchCountries(searchQuery) {
  const url = 'https://restcountries.eu/rest/v2/name/';

  return fetch(url + searchQuery).then(response => response.json());
}

export default fetchCountries;
