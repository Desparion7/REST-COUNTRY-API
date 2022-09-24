import { renderCountriesList } from './render.js';
export const renderDashboard = () => {
	const API_URL_ALL = 'https://restcountries.com/v3.1/all';
 
	let countries = [];
	let region = '';
	let query = '';

	fetch(API_URL_ALL)
		.then((res) => res.json())
		.then((countriesInfo) => {
			countries = countriesInfo.map((country) => {
				return {
					capital: country.capital && country.capital[0],
					population: country.population.toLocaleString(),
					name: country.name.common,
					code: country.cca3,
					region: country.region,
					flags: country.flags.png,
				};
			});
			renderCountriesList(countries);
		});

	const filterDataAndRenderCountriesList = () => {
		const filtredCountrys = countries.filter((country) => {
			return (
				country.name.toLowerCase().includes(query) &&
				(!region || country.region === region)
			);
		});
		renderCountriesList(filtredCountrys);
	};

	document.querySelector('#query').addEventListener('input', (e) => {
		query = e.target.value.toLowerCase().trim();
		filterDataAndRenderCountriesList();
	});
	document.querySelector('#region').addEventListener('change', (e) => {
		region = e.target.value;
		filterDataAndRenderCountriesList();
	});
};
