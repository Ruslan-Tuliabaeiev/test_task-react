import React from 'react';
import PropTypes from 'prop-types';
//import { TrashCan } from '@carbon/icons-react';
//import { useTranslation } from 'react-i18next';

const ProductItem = ({ product, onDelete }) => {
//   const { t } = useTranslation();

  return (
    <li key={product.id} className="h-[70px] w-[400px] mt-5 flex items-center bg-white rounded-lg shadow-lg gap-5 hover:bg-slate-100 hover:shadow-2xl focus:bg-slate-100">
      <h2 className="ml-7">{product.title}</h2>
      <p className="max-w-[300px] text-start">{product.description}</p>
      <div className="ml-auto mr-14 flex">  
        <p className="ml-auto"> {product.date}</p>
      </div>  
    </li>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;
