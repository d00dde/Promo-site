import { MainPage } from './mainPage';
import { BuyPage } from './buyPage';
import { SubscribePage } from './subscribePage';
import { SEOPage } from './SEOPage';
import { ContactsPage } from './contactsPage';
import { AboutPage } from './aboutPage';



export const pages = [
	{ path: '/', component: MainPage },
	{ path: '/buy', component: BuyPage },
	{ path: '/subscribe', component: SubscribePage },
	{ path: '/SEO', component: SEOPage },
	{ path: '/contacts', component: ContactsPage },
	{ path: '/about', component: AboutPage },
];

export const links = [
	{ path: '/', title: 'Главная'},
	{ title: 'Услуги', childs: [
			{ path: '/buy', title: 'Купить сайт'},
			{ path: '/subscribe', title: 'Подписка на сайт'},
			{ path: '/SEO', title: 'Продвижение сайта'}
		] 
	},
	{ path: '/contacts', title: 'Контакты'},
	{ path: '/about', title: 'О нас'}
]