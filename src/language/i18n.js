import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getSystemLanguage } from './LanguaeUtils';

import userTableEnglish from './locales/en.json'
import userTableTurkish from './locales/tr.json'

i18n.use(initReactI18next)
    .init({
        resources: {
            en: {
                usertable:userTableEnglish
            },
            tr: {
                usertable:userTableTurkish
            },
        },
        interpolation: { escapeValue: false }, // Çeviri metinlerindeki yer tutucu değerlerin işlenmesi için yapılandırmaları sağlar.
        fallbackNS: 'usertable', //Varsayılan çeviri dosyasını belirtir.
        lng: getSystemLanguage(), // özelliği doğru dil için ayarlanmış olur.
        fallbackLng: 'en',
        whitelist: ['en', 'tr'],
    });

document.documentElement.setAttribute('lang', getSystemLanguage());

export default i18n;