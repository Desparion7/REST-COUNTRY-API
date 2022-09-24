import { renderDetail } from './view-detail.js';
import { renderDashboard } from './view-dashboard.js';

if (window.location.search.includes(`?country=`)) {
	renderDetail();
} else {
	document.querySelector('.filters').classList.add('active');
	renderDashboard();
}

// DARK LIGHT MODE
const body = document.querySelector('body');
const darkModeBtn = document.querySelector('.dark-btn');
let theme;

if (localStorage.getItem('theme')) {
	theme = localStorage.getItem('theme');
} else {
	theme = 'light';
}

if (theme === 'dark') {
	body.classList.add('dark');
} else {
	body.classList.add('light');
}

darkModeBtn.addEventListener('click', () => {
	if (theme === 'dark') {
		theme = 'light';
		body.classList.remove('dark');
		body.classList.add('light');
		localStorage.setItem('theme', theme);
	} else {
		theme = 'dark';
		body.classList.add('dark');
		body.classList.remove('light');
		localStorage.setItem('theme', theme);
	}
});
