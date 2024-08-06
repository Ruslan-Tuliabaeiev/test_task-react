import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ProductItem from "./GroupPageMisc/ProductItem";
import ProductList from "./GroupPageMisc/ProductList";
// import { Product } from "@carbon/icons-react";
import DeleteModal from "../ComePage/ComePageMisc/DeleteModal";
import { CloseLarge } from "@carbon/icons-react";
import { click } from "@testing-library/user-event/dist/click";
import { Loader } from "../Loader/Loader";

export const GroupPage = () => {
    const { t } = useTranslation();
    const [isProductListOpen, setIsProductListOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const [productsList, setProductsList] = useState([
        { id: 1, name: 'Product 1', price: 10, description: 'Description 1  Description Description Description Description 2', quantity: 45, createdAt: new Date().toLocaleDateString() },
        { id: 2, name: 'Product 2', price: 220, description: 'Description Description Description Description 2', quantity: 27, createdAt: new Date().toLocaleDateString() },
        { id: 3, name: 'Product 3', price: 113, description: 'Description 1  Description Description Description Description 2', quantity: 75, createdAt: new Date().toLocaleDateString() },
        { id: 4, name: 'Product 4', price: 234, description: 'Description Description Description Description 2', quantity: 9, createdAt: new Date().toLocaleDateString() },
        { id: 5, name: 'Product 5', price: 17, description: 'Description 1  Description Description Description Description 2', quantity: 33, createdAt: new Date().toLocaleDateString() },
        { id: 6, name: 'Product 6', price: 256, description: 'Description Description Description Description 2', quantity: 12, createdAt: new Date().toLocaleDateString() },
        { id: 7, name: 'Product 7', price: 179, description: 'Description 1  Description Description Description Description 2', quantity: 5, createdAt: new Date().toLocaleDateString() },
        { id: 8, name: 'Product 8', price: 202, description: 'Description Description Description Description 2', quantity: 7, createdAt: new Date().toLocaleDateString() },
      ]);


    const [products, setProducts] = useState([
        {id: 1, title: 'Order 1', date: '2017-06-29 12:09:33',  description: 'desc', get products () { return products }},
          { id: 2, title: 'Order 2', date: '2017-06-29 12:09:33', description: 'desc', get products () { return products } },
          { id: 3, title: 'Order 3', date: '2017-06-29 12:09:33', description: 'desc', get products () { return products }, }
    ])

      const handleDelete = (id) => {
        setProductsList(productsList.filter(product => product.id !== id));
          closeModal();
      };
  
      const openModal = (product) => {
          setSelectedProduct(product);
          setIsModalOpen(true);
      };
  
      const closeModal = () => {
          setIsModalOpen(false);
          setSelectedProduct(null);
      };
  
      const confirmDelete = () => {
          handleDelete(selectedProduct.id);
      };
  
      const toggleProductListModal = () => {
        setIsProductListOpen(prevState => !prevState);
    };

    useEffect(() => {
        setTimeout(() => {
            setData({ message: 'Data loaded' });
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return <Loader />;
    }


    return (
        <div className="h-[1200px] max-w-[1700px] ml-[250px] bg-slate-300 font-serif">
           
                <div  className="ml-[100px] flex gap-7 pt-[50px]">
                <p className="text-lg font-semibold text-black">{t('come')} {t('products')} /</p>
                </div>
          
                <div className="flex">
                     <div  onClick={toggleProductListModal}>
                         <ul className="max-w-[1300px] ml-[60px]">
                            {products.map(product => (
                            <ProductItem key={product.id} product={product} />
                            ))}
                         </ul> 
                    </div>

                {isProductListOpen && (                  
                  <div className="max-w-[1300px] mt-[20px] ml-[60px] bg-white rounded shadow-lg border  relative">
                    <button
                       onClick={toggleProductListModal}
                       className="absolute top-[-50px] right-[-20px] h-[50px] w-[50px] ml-[130px] mt-8 flex items-center justify-center bg-white rounded-full shadow-xl hover:bg-slate-200 focus:bg-slate-200"
                        >
                     <CloseLarge size={20}/>
                    </button>
                        <div className="h-[60px] ml-10 flex items-center gap-4">
                            <p>{t('come')} </p>
                            <p>{t('Welcome to React')} </p>
                        </div>
                         <ul>
                            {productsList.map(product => (
                            <ProductList key={product.id} product={product} onDelete={() => openModal(product)} />
                             ))}
                         </ul>
                    </div>
                )}                

               </div>
               <DeleteModal isOpen={isModalOpen} onClose={closeModal} onConfirm={confirmDelete} product={selectedProduct} />
        </div>
    )
}
