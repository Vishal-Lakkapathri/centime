// @flow

import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ViewHeader from './components/ViewHeader';
import Diagram from './components/Diagram';

import { getExpendituresRequest } from './home.slice';

import './styles.scss';
import centimeLogo from './centimeLogo.jpeg';

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
			<ViewHeader imageUrl={centimeLogo} title='centime' subTitle='Cash flow matters' />
			{isLoading ? (
				<div>Loading Please Wait</div>
			) : (
				<Diagram expenditures={expenditures} isLoading={isLoading} />
			)}
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
