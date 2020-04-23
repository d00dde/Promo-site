import React from 'react';
import { data } from '../../data';
import PresentationBlock from '../../components/PresentationBlock';
import Features from '../../components/Features';
import Stages from '../../components/Stages';
import Proposals from '../../components/Proposals';
import Loader from '../../components/Loader';

export const MainPage = () => {

	return (
		<main className='main-page-wrapper page'>
			<PresentationBlock data={data.mainPage.PresentationBlock} />
			<Proposals data={data.mainPage.ProposalsBlock} />
			<Features data={data.mainPage.FeaturesBlock} />
			<Stages data={data.mainPage.StagesBlock} />
		</main>
	)
}