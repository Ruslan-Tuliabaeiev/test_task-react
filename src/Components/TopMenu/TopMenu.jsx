import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { RuleFilled, Time } from "@carbon/icons-react";
import { useTranslation } from 'react-i18next';
import ActiveSessions from "./topMenuMisc/ActiveSessions";
//import { I18nextProvider } from 'react-i18next';
// import i18n from '../../i18n';
//import i18n, { initializeI18n } from '../../i18';

export const TopMenu = ({changeLanguage}) => {
    const [dateTime, setDateTime] = useState(new Date());
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const { t } = useTranslation();

    const toggleLanguage = () => {
      const newLanguage = currentLanguage === 'en' ? 'uk' : 'en';
      changeLanguage(newLanguage);
      setCurrentLanguage(newLanguage);
    };

    useEffect(() => {
      const interval = setInterval(() => {
        setDateTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
        <>
          <div className="h-20 flex bg-white">
            <div className="ml-[150px] flex items-center">
                <RuleFilled color="green" size={27} className="mr-1" />
                <p className="text-lg font-semibold font-serif text-[green]">{t('invertory')}</p>
            </div>

            <div className="ml-[50px] flex items-center font-serif">
              <button
                onClick={() => toggleLanguage('en')}
                className={`px-3 py-1 rounded ${currentLanguage === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
              >
                English
              </button>
              <button
                 onClick={() => toggleLanguage('uk')}
                 className={`px-3 py-1 ml-2 rounded ${currentLanguage === 'uk' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
              >
                Українська
              </button>
           </div>

             <div className="mt-2 ml-auto mr-14 flex flex-col font-serif">
                <p className="">{t('today')}</p>
                  <p className="flex items-center gap-1">
                    {dateTime.toLocaleDateString()}
                    <Time color="green" className="ml-3"/>
                    {dateTime.toLocaleTimeString()}
                  </p>
                  <ActiveSessions />
             </div>
          </div>
        
        </>
    );
};

TopMenu.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
};
