import  { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faViber } from '@fortawesome/free-brands-svg-icons';

export const data = {
	navbarLinks: [
		{ path: '/', title: 'Главная'},
		{ title: 'Услуги', childs: [
				{ path: '/buy', title: 'Купить сайт'},
				{ path: '/subscribe', title: 'Подписка на сайт'},
				{ path: '/SEO', title: 'Продвижение сайта'}
			] 
		},
		{ path: '/contacts', title: 'Контакты'},
		{ path: '/about', title: 'О нас'}
	],
	footerLinks: [
		{title: 'phone', value: '8800853535', link: '#', icon: faPhoneAlt },
		{title: 'viber', value: '8800853535', link: '#', icon: faViber },
		{title: 'email', value: '8800853535', link: '#', icon: faEnvelope },
		{title: 'address', value: '8800853535', link: '#', icon: faMapMarkerAlt }
	],
	mainPage: {
		PresentationBlock: {
			BgImgSrc: '/img/mainPage/mainImg.jpg',
			mainTitle: 'Lorem	ipsum non dolar sit',
			mainText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit repellat eum natus nobis, officia cum aspernatur, temporibus laudantium vitae dolor itaque hic nemo fuga expedita cumque minima ut sunt, quaerat ab totam eligendi repudiandae earum ipsa. Id quibusdam delectus impedit.	',
		},
		FeaturesBlock: {
			BgImgSrc: '/img/mainPage/featuresImg.jpg',
			title:'Почему выгодно заказать сайт у нас:',
			features: [
				{title: 'Высокое качество', description: 'Вы получите оптимизированный и современный веб-сайт, который понравится пользователям и будет соответствовать стандартам поисковых систем.', icon: '/img/icons/approval.png'},
				{title: 'Гибкие условия', description: 'Мы предоставляем разные сервисы: аренда сайта, техподдержка, разные способы рекламы продвижения. Вы получите оптимальное решение именно для Вашего бизнеса.', icon: '/img/icons/hierarchy.png'},
				{title: 'Что-то ещё...', description: 'Ещё что-то охуенное, чего не делают наши конкуренты. Мы пока и сами не придумали, но скоро придумаем.', icon: '/img/icons/profit.png'},
			]
		},
		StagesBlock: {
			
		},
		ProposalsBlock: {
			title: 'Условия аренды сайтов:',
			proposals: [
				{title: 'Landing page', description: 'Одностраничный сайт, рассказывающий о товаре или услуге. Есть возможность обратного звонка клиенту', price: '10', period: '1 неделя'},
				{title: 'Корпоративный сайт', description: 'Сайт, состоящий из 5-7 страниц, подробно рассказывающий о компании и услугах. Может ', price: '30', period: '2 недели'},
				{title: 'Интернет-магазин', description: '', price: '30', period: '2 недели'}
			]
		}

		
	}
}
