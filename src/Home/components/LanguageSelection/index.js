import React from 'react';

type LanguageSelectionPropTypes = {
	availableLanguages: Array<any>,
	languageCode: string,
	onLanguageChange: () => void,
};

const LanguageSelection = ({
	availableLanguages,
	languageCode,
	onLanguageChange,
}: LanguageSelectionPropTypes) => (
	<div>
		<select value={languageCode} onChange={onLanguageChange}>
			{availableLanguages.map(({ name, value }: { name: string, value: string }) => (
				<option value={value} key={name}>
					{name}
				</option>
			))}
		</select>
	</div>
);

export default LanguageSelection;
