import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import ProductItem from "./ComePageMisc/ProductItem";
import DeleteModal from "./ComePageMisc/DeleteModal";
import { Loader } from "../Loader/Loader";
import { Orders } from "./ComePageMisc/Orders";
import { ArrowLeft } from "@carbon/icons-react";

export const ComePage = () => {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [comeProductsOpen, setComeProductsOpen] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('');

    const [comeProducts, setComeProducts] = useState([
        { id: 1, name: 'very very long name Product 1', price: 10, type: 'Monitors', quantity: 45, createdAt: new Date().toLocaleDateString() },
        { id: 2, name: 'very very long name Product 2', price: 220, type: 'computer', quantity: 27, createdAt: new Date().toLocaleDateString() },
        { id: 3, name: 'very very long name Product 3', price: 113, type: 'tablet', quantity: 75, createdAt: new Date().toLocaleDateString() },
        { id: 4, name: 'very very long name Product 4', price: 234, type: 'Monitors', quantity: 23, createdAt: new Date().toLocaleDateString() },
        { id: 5, name: 'very very long name Product 5', price: 17, type: 'tablet', quantity: 63, createdAt: new Date().toLocaleDateString() },
        { id: 6, name: 'very very long name Product 6', price: 256, type: 'tablet', quantity: 33, createdAt: new Date().toLocaleDateString() },
        { id: 7, name: 'very very long name Product 7', price: 179, type: 'Monitors', quantity: 5, createdAt: new Date().toLocaleDateString() },
        { id: 8, name: 'very very long name Product 8', price: 202, type: 'computer', quantity: 7, createdAt: new Date().toLocaleDateString() },
      ]);

    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 10, description: 'Description 1  Description Description Description Description 2', quantity: 45, createdAt: new Date().toLocaleDateString() },
        { id: 2, name: 'Product 2', price: 220, description: 'Description Description Description Description 2', quantity: 27, createdAt: new Date().toLocaleDateString() },
        { id: 3, name: 'Product 3', price: 113, description: 'Description 1  Description Description Description Description 2', quantity: 75, createdAt: new Date().toLocaleDateString() },
        { id: 4, name: 'Product 4', price: 234, description: 'Description Description Description Description 2', quantity: 9, createdAt: new Date().toLocaleDateString() },
        { id: 5, name: 'Product 5', price: 17, description: 'Description 1  Description Description Description Description 2', quantity: 33, createdAt: new Date().toLocaleDateString() },
        { id: 6, name: 'Product 6', price: 256, description: 'Description Description Description Description 2', quantity: 12, createdAt: new Date().toLocaleDateString() },
        { id: 7, name: 'Product 7', price: 179, description: 'Description 1  Description Description Description Description 2', quantity: 5, createdAt: new Date().toLocaleDateString() },
        { id: 8, name: 'Product 8', price: 202, description: 'Description Description Description Description 2', quantity: 7, createdAt: new Date().toLocaleDateString() },
      ]);

    const handleDelete = (id, type) => {
        if (type === 'products') {
            setProducts(products.filter(product => product.id !== id));
        } else if (type === 'comeProducts') {
            setComeProducts(comeProducts.filter(product => product.id !== id));
        }
        closeModal();
    };
    const openModal = (product, type) => {
        setSelectedProduct({ ...product, type });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const confirmDelete = () => {
        if (selectedProduct) {
            handleDelete(selectedProduct.id, selectedProduct.type);
        }
    };

    const toggleProductsModal = () => {
        setComeProductsOpen(prevState => !prevState);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    // const filteredProducts = products.filter(product =>
    //     product.name.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    const filteredProducts = comeProducts.filter(product => {
        const matchesQuery = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = searchType ? product.type === searchType : true;
        return matchesQuery && matchesType;
    });


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
        <div
         className="h-[1200px] max-w-[1700px] ml-[250px] bg-slate-300"
         data-testid="come-page"
         >
            <div className="">
                <div  className="ml-[100px] flex gap-7 pt-[50px] ">
                    <p className="text-lg font-semibold text-black ">{t('come')} {t('products')} /</p>

                    <p>{t('productName')}: </p>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearch}
                        placeholder={t('searchproduct')}
                        className="rounded border border-gray-300"
                    />

                    <p>{t('productType')}: </p>
                   <select
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="rounded border border-gray-300"
                   >
                        <option value="">{t('allTypes')}</option>
                        <option value="Monitors">Monitors</option>
                        <option value="computer">Computer</option>
                        <option value="tablet">Tablet</option>
                    </select>
                </div>
            </div>
            {/* {searchQuery && (
                <ul className="w-[400px] ml-[100px] mt-4">
                    {filteredProducts.map(product => (
                        <li key={product.id} className="p-4 bg-white rounded shadow mb-2">
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p>Price: ${product.price}</p>
                            <p>Quantity: {product.quantity}</p>
                            <p>Created At: {product.createdAt}</p>
                        </li>
                    ))}
                </ul>
            )} */}
            {searchQuery || searchType ? (
                <ul className="w-[400px] ml-[100px] mt-4">
                    {filteredProducts.map(product => (
                        <li key={product.id} className="p-4 bg-white rounded shadow mb-2">
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p>Price: ${product.price}</p>
                            <p>Quantity: {product.quantity}</p>
                            <p>Created At: {product.createdAt}</p>
                        </li>
                    ))}
                </ul>
            ) : null}
            {!comeProductsOpen && ( 
                <div
                  onClick={toggleProductsModal}
                  className="h-[30px] w-[270px] ml-[100px]  mt-5 flex items-center justify-center bg-white rounded-lg shadow-lg gap-3 hover:bg-slate-100 hover:shadow-2xl focus:bg-slate-100">
                  <ArrowLeft /> 
                  <p>{t('toTheListParishes')}</p>
                </div>
            )}

        {comeProductsOpen && (   
          <div onClick={toggleProductsModal}>
            <ul className="max-w-[1300px] ml-[60px]">
                {comeProducts.map(product => (
                 <Orders key={product.id} product={product}  onDelete={() => openModal(product, 'comeProducts')} />
                 ))}
            </ul>
          </div>
         )}

        {!comeProductsOpen && ( 
          <div>
            <ul className="max-w-[1300px] ml-[60px]">
                {products.map(product => (
                 <ProductItem key={product.id} product={product}  onDelete={() => openModal(product, 'products')} />
                 ))}
            </ul>
          </div> 
        )}

            <DeleteModal isOpen={isModalOpen} onClose={closeModal} onConfirm={confirmDelete} product={selectedProduct} />
        </div>
    )
}
