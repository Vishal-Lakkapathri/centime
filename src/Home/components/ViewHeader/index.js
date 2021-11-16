import React from 'react';

import './styles.scss';

type ViewHeaderPropsType = {
	title: ?string,
	subTitle: ?string,
	imageUrl: ?string,
};

const ViewHeader = ({ title, subTitle, imageUrl }: ViewHeaderPropsType) => (
	<div className='container'>
		<img src={imageUrl} alt='logo' width='60' height='60' />
		<div className='titleContainer'>
			<span className='title'>{title}</span>
			<span className='title subTitle'>{subTitle}</span>
		</div>
	</div>
);

export default ViewHeader;
