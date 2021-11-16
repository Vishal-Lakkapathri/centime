import React from 'react';
import Chart from 'react-google-charts';

type DiagramPropsType = {
	expenditures: Array<mixed>,
};

const Diagram = ({ expenditures }: DiagramPropsType) => (
	<Chart
		width={800}
		height={600}
		chartType='Sankey'
		data={expenditures}
		rootProps={{ 'data-testid': '1' }}
	/>
);

export default Diagram;
