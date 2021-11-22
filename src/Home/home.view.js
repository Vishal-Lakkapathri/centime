// @flow

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import ViewHeader from './components/ViewHeader';
import Diagram from './components/Diagram';
import LanguageSelection from './components/LanguageSelection';
import AddCategory from './components/AddCategory';

import {
	getExpendituresRequest,
	setLanguageCode,
	setCategoryValues,
	deleteCategoryValues,
} from './home.slice';

import './styles.scss';
import centimeLogo from './centimeLogo.jpeg';

import { availableLanguages } from './mockData';

type HomeViewPropsType = {
	getExpenditures: () => void,
	setLanguage: (value: string) => void,
	setCategory: (values: Object) => void,
	deleteCategory: (values: Object) => void,
	expenditures: Array<mixed>,
	isLoading: boolean,
	languageCode: string,
};

const DeleteCategory = ({ handleSubmitClick }) => (
	<div>
		<form>
			<label for='categoryName'>Delete Category Name</label>
			<input type='text' id='categoryId' name='Category' />
		</form>
		<button type='button' onClick={handleSubmitClick}>
			Submit
		</button>
	</div>
);

const HomeView = (props: HomeViewPropsType) => {
	const {
		getExpenditures,
		expenditures,
		isLoading,
		setLanguage,
		languageCode,
		setCategory,
		deleteCategory,
	} = props;
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

	const handleSubmitClick = () => {
		const fromCategory = document.getElementById('fromId')?.value;
		const toCategory = document.getElementById('toId')?.value;
		const weight = document.getElementById('weightId')?.value;
		setCategory({ fromCategory, toCategory, weight: parseInt(weight) });
	};

	const handleDeleteClick = () => {
		const deleteCategoryValue = document.getElementById('categoryId')?.value;
		deleteCategory({ deleteCategoryValue });
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
			<AddCategory handleSubmitClick={handleSubmitClick} />
			<DeleteCategory handleSubmitClick={handleDeleteClick} />
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
	category: state?.home?.category,
});

const mapDispatchToProps = {
	getExpenditures: getExpendituresRequest,
	setLanguage: setLanguageCode,
	setCategory: setCategoryValues,
	deleteCategory: deleteCategoryValues,
};

export default (connect(mapStateToProps, mapDispatchToProps)(HomeView): any);
