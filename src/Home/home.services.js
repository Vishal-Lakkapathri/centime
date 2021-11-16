// @flow

import mockData from './mockData';

type mockDataTypes = {
	status: string,
	data: Array<any>,
};

export const getExpendituresService = (): Promise<typeof mockData> => {
	return new Promise((resolve: (mockData: mockDataTypes) => any) => {
		setTimeout(() => resolve(mockData), 2000);
	});
};
