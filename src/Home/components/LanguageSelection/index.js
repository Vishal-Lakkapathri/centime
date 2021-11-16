import React, { useState } from 'react';

type LanguageSelectionPropTypes = {
	availableLanguages: Array<any>,
	languageCode: string,
};

const LanguageSelection = ({ availableLanguages, languageCode }: LanguageSelectionPropTypes) => {
	const [selectedLanguageCode, setSelectedLanguageCode] = useState(languageCode);
	const handleOnChange = (e: Object) => {
		setSelectedLanguageCode(e.target.value);
		localStorage.setItem('selectedLanguageCode', e.target.value);
	};
	return (
		<div>
			<select value={selectedLanguageCode} onChange={handleOnChange}>
				{availableLanguages.map(({ name, value }: { name: string, value: string }) => (
					<option value={value} key={name}>
						{name}
					</option>
				))}
			</select>
		</div>
	);
};

export default LanguageSelection;
