import React from 'react';
import PropTypes from 'prop-types';
import { TrashCan } from '@carbon/icons-react';
import { useTranslation } from 'react-i18next';

const ProductItem = ({ product, onDelete }) => {
  const { t } = useTranslation();

  return (
    <li key={product.id} className="h-[70px] mt-5 flex items-center bg-white rounded-lg shadow-lg gap-5">
      <h2 className="ml-7">{product.name}</h2>
      <div className="ml-7 w-[90px] flex flex-col">
        <p>{t('price')}: ${product.price}</p>
        <p>{t('price')}: ₴{product.price * 40}</p>
      </div>
      <p className="max-w-[500px] text-start">{t('description')}: {product.description}</p>
      <div className="ml-auto mr-14 flex">  
        <p className="pr-10">{t('quantity')}: {product.quantity}</p> 
        <p className="ml-auto pr-[50px]">{t('createdAt')}: {product.createdAt}</p>
        <button 
          className="flex items-center gap-2"
          onClick={() => onDelete(product.id)}>
          <TrashCan /> 
          {t('delete')}
        </button>
      </div>  
    </li>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    quantity: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ProductItem;
