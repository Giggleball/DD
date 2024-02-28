import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from 'i18next-http-backend';


i18n.use(initReactI18next)
    .use(Backend)
    .init({
            lng: "nl",
            fallbackLng: "nl",
            debug: true,
            keySeparator: '.',
            interpolation: {
                escapeValue: false
            }
        }
    )

export default i18n;
