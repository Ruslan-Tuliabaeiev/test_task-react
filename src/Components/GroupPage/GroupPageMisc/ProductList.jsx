import React from 'react';
import PropTypes from 'prop-types';
import { TrashCan } from '@carbon/icons-react';
import { useTranslation } from 'react-i18next';

const ProductList = ({ product, onDelete }) => {
  const { t } = useTranslation();

  return (
    <li key={product.id} className="h-[70px] flex items-center bg-white gap-5 border-y-2 divide-slate-300">
      <h2 className="ml-7">{product.name}</h2>
      <p className="max-w-[300px] text-start">{t('description')}: {product.description}</p>
      <div className="ml-auto mr-14 flex">  
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

ProductList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    quantity: PropTypes.number,
  }).isRequired,
  onDelete: PropTypes.func,
};

export default ProductList;
