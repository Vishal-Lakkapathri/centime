import React from 'react';
import Chart from 'react-google-charts';

type DiagramPropsType = {
	expenditures: Array<mixed>,
};

const Diagram = ({ expenditures }: DiagramPropsType) => {
	return (
		<div>
			<Chart
				width={800}
				height={600}
				chartType='Sankey'
				data={expenditures}
				rootProps={{ 'data-testid': '1' }}
			/>
		</div>
	);
};

export default Diagram;
