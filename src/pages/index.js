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
	{ path: '/', title: 'Главная', dropdown: false },
	{ path: '', title: 'Услуги', dropdown: true, childs: [
		{ path: '/buy', title: 'Купить сайт', dropdown: false },
		{ path: '/subscribe', title: 'Подписка на сайт', dropdown: false },
		{ path: '/SEO', title: 'Продвижение сайта', dropdown: false }
		] 
	},
	{ path: '/contacts', title: 'Контакты', dropdown: false },
	{ path: '/about', title: 'О нас', dropdown: false },
]