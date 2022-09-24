import { renderDetail } from './view-detail.js';
import { renderDashboard } from '/view-dashboard.js';

if (window.location.search.includes(`?country=`)) {
	renderDetail();
	
} else {
	document.querySelector('.filters').classList.add('active');
	renderDashboard();
}

