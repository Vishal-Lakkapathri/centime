// @flow

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import ViewHeader from './components/ViewHeader';
import Diagram from './components/Diagram';
import LanguageSelection from './components/LanguageSelection';

import { getExpendituresRequest, setLanguageCode } from './home.slice';

import './styles.scss';
import centimeLogo from './centimeLogo.jpeg';

import { availableLanguages } from './mockData';

type HomeViewPropsType = {
	getExpenditures: () => void,
	setLanguage: (value: string) => void,
	expenditures: Array<mixed>,
	isLoading: boolean,
	languageCode: string,
};

const HomeView = (props: HomeViewPropsType) => {
	const { getExpenditures, expenditures, isLoading, setLanguage, languageCode } = props;
	const { t, i18n } = useTranslation();

	useEffect(() => {
		getExpenditures();
	}, [getExpenditures]);

	useEffect(() => {
		i18n.changeLanguage(languageCode);
	}, [i18n, languageCode]);

	const handleLanguageChange = (e) => {
		setLanguage(e.target.value);
		localStorage.setItem('selectedLanguageCode', e.target.value);
	};

	return (
		<>
			<div className='mainContainer'>
				<ViewHeader imageUrl={centimeLogo} title='centime' subTitle={t(['cashflowSubtitle'])} />
				<div className='bodyContainer'>
					{isLoading ? (
						<span>{t(['loading'])}</span>
					) : (
						<div className='diagramContainer'>
							<span className='title diagramTitle'>Sankey Diagram</span>
							<Diagram expenditures={expenditures} />
						</div>
					)}
				</div>
			</div>
			<div className='languageSelectionContainer'>
				<LanguageSelection
					availableLanguages={availableLanguages}
					languageCode={languageCode}
					onLanguageChange={handleLanguageChange}
				/>
			</div>
		</>
	);
};

const mapStateToProps = (state) => ({
	expenditures: state?.home.expenditures,
	isLoading: state?.home?.isLoading,
	languageCode: state?.home?.languageCode,
});

const mapDispatchToProps = (dispatch) => ({
	getExpenditures: () => dispatch(getExpendituresRequest()),
	setLanguage: (value: string) => dispatch(setLanguageCode(value)),
});

export default (connect(mapStateToProps, mapDispatchToProps)(HomeView): any);
