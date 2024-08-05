// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
 //import LanguageDetector from 'i18next-browser-languagedetector';
// import resourcesToBackend from 'i18next-resources-to-backend';
// import ChainedBackend from 'i18next-chained-backend';
// import HttpBackend from 'i18next-http-backend';

// export function initializeI18n() {
//   i18n
//     .use(LanguageDetector)
//     .use(ChainedBackend)
//     .use(initReactI18next)
//     .init({
//       supportedLngs: ['uk', 'en'],
//       load: 'languageOnly',
//       fallbackLng: 'en',
//       detection: {
//         convertDetectedLanguage: (lng) => {
//           if (lng.includes('en')) {
//             return 'en';
//           }
//           return lng;
//         },
//       },
//       interpolation: {
//         escapeValue: false,
//       },
//       backend: {
//         backends: [
//           HttpBackend,
//           resourcesToBackend((language, _) => {
//             if (language.includes('en')) {
//               language = 'en';
//             }
//             return import(`./locales/${language}/${language}.json`);
//           }),
//         ],
//         backendOptions: [
//           {
//             loadPath: './locales/{{lng}}/translation.json',
//           },
//         ],
//       },
//       react: {
//         useSuspense: false, // Якщо ви не використовуєте Suspense
//       },
//     });
// }

// export default i18n;


// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import resourcesToBackend from 'i18next-resources-to-backend';
// import ChainedBackend from 'i18next-chained-backend';
// import HttpBackend from 'i18next-http-backend';

// // ! Do not use nested structure for locales
// // TODO plurals https://www.i18next.com/translation-function/plurals
// // TODO think about changing document language
// export function initializeI18n() {
//   i18n
//     .use(LanguageDetector)
//     .use(ChainedBackend)
//     .use(initReactI18next)
//     .init({
//       // configs related to the language detection
//       supportedLngs: ['uk', 'en'],
//       load: 'languageOnly',
//       fallbackLng: 'en',
//       detection: {
//         convertDetectedLanguage: (lng) => {
//           if (lng.includes('en')) {
//             return 'en';
//           }
//           return lng;
//         },
//       },

//       // configs related to the react
//       interpolation: {
//         escapeValue: false,
//       },

//       // configs related to the dynamic loading of the resources
//       backend: {
//         backends: [
//           HttpBackend,
//           resourcesToBackend((language, _) => {
//             if (language.includes('en')) {
//               language = 'en';
//             }
//             return import(`./locales/${language}//translation.json`);
//           }),
//         ],
//         backendOptions: [
//           {
//             loadPath: './locales/{{language}}/translation.json',
//           },
//         ],
//       },
//     });
// }


// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';

// i18n
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     supportedLngs: ['en', 'uk'],
//     fallbackLng: 'en',
//     detection: {
//       order: ['queryString', 'cookie'],
//       cache: ['cookie']
//     },
//     backend: {
//       loadPath: './locales/{{lng}}/translation.json',
//     },
//     react: {
//       useSuspense: false,
//     }
//   });

// export default i18n;
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";


// const resources = {
//   en: {
//     translation: {
//       "Welcome to React": "Welcome to React and react-i18next"
//     }
//   },
//   uk: {
//     translation: {
//       "Welcome to React": "Bienvenue à React et react-i18next"
//     }
//   }
// };

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .use(LanguageDetector)
// //   .init({
// //     resources,
// //     lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
// //     // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
// //     // if you're using a language detector, do not define the lng option

// //     interpolation: {
// //       escapeValue: false // react already safes from xss
// //     }
// //   });
// .init({
//     supportedLngs: ['en', 'uk'],
//     fallbackLng: 'en',
//     detection: {
//       order: ['queryString', 'cookie'],
//       cache: ['cookie'],
//       convertDetectedLanguage: (lng) => {
//         if (lng.includes('en')) {
//           return 'en';
//         }
//         return lng;
//       }
//     },
//     backend: {
//       loadPath: './locales/{{lng}}/translation.json',
//     },
//     interpolation: {
//       escapeValue: false // react already safes from xss
//     },
//     react: {
//       useSuspense: false,
//     }
//   });;
//   export default i18n;
// =======================
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "invertory": "INVENTORY",
      "today": "Today",
      "home": "Home",
      "come": "COME",
      "group": "GROUP",
      "products": "PRODUCTS",
      "using": "USING",
      "settings": "SETINGS",
      "type": "Type",
      "speciality": "Speciality",
      "price": "Price",
      "totalPrice": "Total price",
      "quantity": "Quantity",
      "createdAt": "Created At",
      "description": "Description",
      "delete": "Delete",
      "cancel": "Cancel",
      "deleteProduct": "Delete Product",
      "areYouSureDelete": "Are you sure you want to delete", 
      "productName": "Product name",
      "toTheListParishes": "To the list of coming products",
    }
  },
  uk: {
    translation: {
      "Welcome to React": "Ласкаво просимо до React і react-i18next",
      "invertory":"ІНВЕНТАРІЙ",
      "today": "Сьогодні",
      "home": "На головну",
      "come": "ПРИХОДИ",
      "group": "ГРУППИ",
      "products": "ПРОДУКТИ",
      "using": "КОРИСТУВАЧИ",
      "settings": "НАЛАШТУВАННЯ",
      "type": "Tип",
      "speciality": "Спецефікація",
      "price": "Ціна",
      "totalPrice": "Загальна ціна",
      "quantity": "Кількість",
      "createdAt": "Створено в",
      "description": "Опис",
      "delete": "Видалити",
      "cancel": "Скасувати",
      "deleteProduct": "Видалити продукт",
      "areYouSureDelete": "Ви впевнені, що хочете видалити",
      "productName": "Назва продукту",
      "toTheListParishes": "До списку приходу продуктів",
    }
  }
};

i18n
  .use(HttpApi) // using http backend
  .use(LanguageDetector) // using language detector
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
     resources,
    supportedLngs: ['en', 'uk'],
    fallbackLng: 'en',
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
      convertDetectedLanguage: (lng) => {
        if (lng.includes('en')) {
          return 'en';
        }
        return lng;
      }
    },
    backend: {
      loadPath: './locales/{{lng}}/translation.json',
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
      useSuspense: false,
    }
  });

export default i18n;
// =======================
