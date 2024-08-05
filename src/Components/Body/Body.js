import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import i18n from '../../i18n';
import { TopMenu } from '../TopMenu/TopMenu';
import { Sidebar } from '../Sidebar/Sidebar';
import { ProductsPage } from '../ProductsPage/ProductsPage';
import { ComePage } from '../ComePage/ComePage';
import { GroupPage } from '../GroupPage/GroupPage';
import { HomePage } from '../HomePage/HomePage';
import { SetingsPage } from '../SetingsPage/SetingsPage';
//import { useTranslation } from 'react-i18next';


export const Body = () => {
  // const { t } = useTranslation();

  // useEffect(() => {
  //   initializeI18n();
  // }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>


 <Router>
         <TopMenu changeLanguage={changeLanguage} />
         <Sidebar />
   <Routes>
      <Route path="/" element={<HomePage />}  />
      <Route path="/come" element={<ComePage />} />
      <Route path="/group" element={<GroupPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/settings" element={<SetingsPage />} />
   </Routes>
  
</Router> 
   </>
  );
}
// {/* <Router>
// <TopMenu changeLanguage={changeLanguage} />
// <Sidebar />
// <div className="content">
//  <Routes>
//     <Route path="/" />
//     <Route path="/products" element={<ProductsPage />} />
//     <Route path="/group" />
//     <Route path="/settings" />
//   </Routes>
// </div>
// </Router> */}