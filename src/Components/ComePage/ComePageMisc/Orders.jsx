import React from 'react';
import PropTypes from 'prop-types';
import { TrashCan } from '@carbon/icons-react';
import { useTranslation } from 'react-i18next';

export const Orders = ({ product, onDelete }) => {
  const { t } = useTranslation();

  return (
    <li key={product.id} className="h-[70px] mt-5 flex items-center bg-white rounded-lg shadow-lg hover:bg-slate-100 hover:shadow-2xl focus:bg-slate-100">
      <h2 className="ml-7">{t('productName')}: {product.name}</h2>
      <div className="ml-7 w-[170px] flex flex-col">
        <p>{t('price')}: ${product.price}</p>
        <p>{t('price')}: ₴{product.price * 40}</p>
      </div>
      <div className="ml-7 w-[200px] flex flex-col">
        <p>{t('totalPrice')}: ${product.price * product.quantity}</p>
        <p>{t('totalPrice')}: ₴{product.price * product.quantity * 40}</p>
      </div>
      <div className="ml-auto mr-14 flex">  
        <p className="pr-10">{t('quantity')}: {product.quantity}</p> 
        <p className="ml-auto pr-[50px]">{t('createdAt')}: {product.createdAt}</p>
        <button 
          className="flex items-center gap-2"
          onClick={() => onDelete(product.id)}>
          <TrashCan /> 
          {/* {t('delete')} */}
        </button>
      </div>  
    </li>
  );
};

Orders.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    quantity: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};



