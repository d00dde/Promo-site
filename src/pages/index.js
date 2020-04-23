import { MainPage } from './mainPage';
import { BuyPage } from './buyPage';
import { SubscribePage } from './subscribePage';
import { SEOPage } from './SEOPage';
import { ContactsPage } from './contactsPage';
import { AboutPage } from './aboutPage';
import {data} from '../data';



export const pages = [
	{ path: '/', component: MainPage },
	{ path: '/buy', component: BuyPage },
	{ path: '/subscribe', component: SubscribePage },
	{ path: '/SEO', component: SEOPage },
	{ path: '/contacts', component: ContactsPage },
	{ path: '/about', component: AboutPage },
];

export const links = data.navbarLinks.map(({ title, childs = null , path = null }) => {
	if(childs){
		return {
			title,
			childs: childs.map(({ title, path }) => { return { path, title }})
		};
	}
	return { path, title }
});


