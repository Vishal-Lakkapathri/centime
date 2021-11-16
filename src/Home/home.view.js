// @flow

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ViewHeader from './components/ViewHeader';
import Diagram from './components/Diagram';
import LanguageSelection from './components/LanguageSelection';

import { getExpendituresRequest } from './home.slice';

import './styles.scss';
import centimeLogo from './centimeLogo.jpeg';

import { availableLanguages } from './mockData';

import i18n, { getSelectedLanguageCode } from './../i18n';

type HomeViewPropsType = {
	getExpenditures: () => void,
	expenditures: Array<mixed>,
	isLoading: boolean,
};

const HomeView = (props: HomeViewPropsType) => {
	const { getExpenditures, expenditures, isLoading } = props;

	useEffect(() => {
		getExpenditures();
	}, [getExpenditures]);

	return (
		<div className='mainContainer'>
			<ViewHeader imageUrl={centimeLogo} title='centime' subTitle={i18n.t(['cashflowSubtitle'])} />
			{isLoading ? (
				<div>{i18n.t(['loading'])}</div>
			) : (
				<Diagram expenditures={expenditures} isLoading={isLoading} />
			)}
			<LanguageSelection
				availableLanguages={availableLanguages}
				languageCode={() => getSelectedLanguageCode()}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	expenditures: state?.home.expenditures,
	isLoading: state?.home?.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
	getExpenditures: () => dispatch(getExpendituresRequest()),
});

export default (connect(mapStateToProps, mapDispatchToProps)(HomeView): any);
