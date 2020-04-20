import React from 'react';
import { data } from '../../data';
import PresentationBlock from '../../components/PresentationBlock';
import Features from '../../components/Features';
import Loader from '../../components/Loader';

export const MainPage = () => {

	return (
		<main className='main-page-wrapper page'>
			<PresentationBlock data={data.mainPage.PresentationBlock} />
			<Features data={data.mainPage.FeaturesBlock} />
			<Loader />
		</main>
	)
	
}