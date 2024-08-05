import React from "react";
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Settings } from "@carbon/icons-react";

export const Sidebar = () => {
    const { t } = useTranslation();
    // const [pages] = useState([
    //     { name: t('home'), path: '/' },
    //     { name: t('come'), path: '/come' },
    //     { name: t('group'), path: '/group' },
    //     { name: t('products'), path: '/products' },
    //     { name: t('settings'), path: '/settings' }
    //   ]);
    //            {pages.map(page => (
    //           <li key={page.name}>
    //             <Link to={page.path}>
    //                 <p>
    //                   {page.name}
    //                 </p>
    //             </Link>
    //           </li>
    //         ))} 


    return (
        <div className="bg-gray-200 h-[1200px] absolute top-[80px] left-0 w-64 shadow-2xl">
            <div className="relative">
                <div className="h-[130px] w-[130px] ml-[60px] mt-8 bg-stone-500 rounded-full shadow-lg"></div>
                <div className="absolute bottom-0 left-0 h-[60px] w-[60px] ml-[130px] mt-8 flex items-center justify-center bg-slate-400 rounded-full shadow-xl">
                    <Settings size={20}/>
                </div>
            </div>
       
          <ul className="mt-[60px] flex flex-col items-center text-lg font-semibold text-black gap-4">

          <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-bold border-b-4 border-blue-500' : 'text-black'
                    }
                >
                    <li className="p-2 rounded hover:bg-gray-300">{t('home')}</li>
                </NavLink>
                <NavLink
                    to="/come"
                    className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-bold border-b-4 border-blue-500' : 'text-black'
                    }
                >
                    <li className="p-2 rounded hover:bg-gray-300">{t('come')}</li>
                </NavLink>
                <NavLink
                    to="/group"
                    className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-bold border-b-4 border-blue-500' : 'text-black'
                    }
                >
                    <li className="p-2 rounded hover:bg-gray-300">{t('group')}</li>
                </NavLink>
                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-bold border-b-4 border-blue-500' : 'text-black'
                    }
                >
                    <li className="p-2 rounded hover:bg-gray-300">{t('products')}</li>
                </NavLink>
                <NavLink
                    to="/settings"
                    className={({ isActive }) =>
                        isActive ? 'text-blue-500 font-bold border-b-4 border-blue-500' : 'text-black'
                    }
                >
                    <li className="p-2 rounded hover:bg-gray-300">{t('settings')}</li>
                </NavLink>
          </ul>
        
        </div>
    );
};
