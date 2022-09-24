

const createInfoElement = (labelName, value) => {
	const infoElement = document.createElement('div');
	const labelElement = document.createElement('strong');
	labelElement.innerText = `${labelName}: `;
	const valueElement = document.createElement('span');
	valueElement.innerText = value;
	infoElement.appendChild(labelElement);
	infoElement.appendChild(valueElement);
	return infoElement;
};
const createFlageImgElement = (country) => {
	const imgCointainer = document.createElement('div');
	const imgElement = document.createElement('img');
	imgElement.src = country.flags;
	imgElement.alt = `${country.name} flag`;
	imgCointainer.appendChild(imgElement);
	return imgCointainer;
};

const createCountryItemElement = (country) => {
	const countryElement = document.createElement('li');
	const anchorElement = document.createElement('a');
	anchorElement.href = `?country=${country.code}`;
	const countryNameElement = document.createElement('strong');
	countryNameElement.classList.add('country-name');
	countryNameElement.innerText = country.name;

	anchorElement.appendChild(createFlageImgElement(country));
	const infoContainerElement = document.createElement('div');
	infoContainerElement.classList.add('info-container');
	infoContainerElement.appendChild(countryNameElement);
	infoContainerElement.appendChild(
		createInfoElement('Population', country.population)
	);
	infoContainerElement.appendChild(createInfoElement('Region', country.region));
	infoContainerElement.appendChild(
		createInfoElement('Capital', country.capital)
	);
	anchorElement.appendChild(infoContainerElement);
	countryElement.appendChild(anchorElement);
	return countryElement;
};

const createListElement = (countries) => {
	const ListElement = document.createElement('ul');
	countries.forEach((country) => {
		ListElement.appendChild(createCountryItemElement(country));
	});
	return ListElement;
};
const createDetailElement = (country) => {
	const detailContainer = document.createElement('div');
	detailContainer.classList.add('detail-container');

	const boxForFirstAndSecondBox = document.createElement('div');
	boxForFirstAndSecondBox.classList.add('boxes');
	const firstBoxDetail = document.createElement('div');
	const secondBoxDetail = document.createElement('div');

	const detailNameElement = document.createElement('strong');
	detailNameElement.classList.add('country-name');
	detailNameElement.innerText = country.name;

	detailContainer.appendChild(detailNameElement);
	firstBoxDetail.appendChild(createInfoElement('Native', country.nativeName));
	firstBoxDetail.appendChild(
		createInfoElement('Population', country.population)
	);
	firstBoxDetail.appendChild(createInfoElement('Region', country.region));
	firstBoxDetail.appendChild(
		createInfoElement('Sub region', country.subregion)
	);
	firstBoxDetail.appendChild(createInfoElement('Capital', country.capital));
	secondBoxDetail.appendChild(
		createInfoElement('Top level domain', country.tld)
	);
	secondBoxDetail.appendChild(createInfoElement('Currency', country.currency));
	secondBoxDetail.appendChild(
		createInfoElement('Languages', country.languages)
	);
	boxForFirstAndSecondBox.appendChild(firstBoxDetail);
	boxForFirstAndSecondBox.appendChild(secondBoxDetail);
	detailContainer.appendChild(boxForFirstAndSecondBox);
	return detailContainer;
};

const createBackButtonElement = () => {
	const anchorElement = document.createElement('a');
	anchorElement.innerHTML = `<i class="fa-solid fa-arrow-left-long"></i> Back`;
	anchorElement.classList.add('detail-back-link');
	anchorElement.href = '/';
	return anchorElement;
};
const createBorderCountryLink = (text, link) => {
	const anchorCountryLink = document.createElement('a');
	anchorCountryLink.innerText = text;
	anchorCountryLink.classList.add('detail-back-link');
	anchorCountryLink.href = link;
	return anchorCountryLink;
};


const createBorderCountriesContainer = (country) => {
	const borderCountriesBox = document.createElement('div');
	const labelElement = document.createElement('strong');
	labelElement.innerText = 'Border Countries';
	borderCountriesBox.appendChild(labelElement);

	country.borders.forEach((border) => {
		borderCountriesBox.appendChild(
			createBorderCountryLink(border, `/REST-COUNTRY-API/?country=${border}`)
		);
	});
	return borderCountriesBox;
};

export const renderCountriesList = (countries) => {
	const rootElement = document.querySelector('#root');
	rootElement.innerHTML = '';
	rootElement.appendChild(createListElement(countries));
};

export const renderCountryDetails = (country) => {
	const rootElement = document.querySelector('#root');
	rootElement.innerHTML = '';
	rootElement.appendChild(createBackButtonElement());
	const infoBox = document.createElement('div');
	infoBox.classList.add('info-box');
	const flagImgElement = createFlageImgElement(country);
	infoBox.appendChild(flagImgElement);

	const infoTextBox = document.createElement('div');

	infoTextBox.appendChild(createDetailElement(country));

	if (country.borders) {
		infoTextBox.appendChild(createBorderCountriesContainer(country));
	}

	rootElement.appendChild(infoBox);
	infoBox.appendChild(infoTextBox);
};
