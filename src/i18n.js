import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import US_EN from './utils/languages/us_en';
import FR_CA from './utils/languages/fr_ca';
import DE_DE from './utils/languages/de_de';

export const getSelectedLanguageCode = () => localStorage.getItem('selectedLanguageCode');

const resources = {
	en: {
		translation: US_EN,
	},
	fr: {
		translation: FR_CA,
	},
	gr: {
		translation: DE_DE,
	},
};

i18n.use(initReactI18next).init({
	lng: getSelectedLanguageCode(),
  resources,
	fallback: 'en',
	interpolation: {
		escapeValue: false,
	},
});

export default i18n