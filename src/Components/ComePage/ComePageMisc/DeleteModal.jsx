import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { CloseLarge } from '@carbon/icons-react';

const DeleteModal = ({ isOpen, onClose, onConfirm, product }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    const handleClickOutside = (e) => {
        if (e.target.id === "modalBackground") {
            onClose();
        }
    };

    return (
        <div
         id="modalBackground"
         onClick={handleClickOutside}
         className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
         >

            <div className="h-[200px] w-[650px] bg-white p-6 rounded shadow-lg  relative">
            <button
             className="absolute top-[-50px] right-[-20px] h-[50px] w-[50px] ml-[130px] mt-8 flex items-center justify-center bg-white rounded-full shadow-xl hover:bg-slate-200 focus:bg-slate-200"
             onClick={onClose}
             >
                    <CloseLarge  size={20}/>
                </button>
                <h2 className="text-xl font-bold mb-4">{t('deleteProduct')}</h2>
                <p>{t('areYouSureDelete')}: {product.name}?</p>
                <div className="h-[100px] w-[650px] ml-[-24px] mt-[40px] bg-green-600 flex justify-end items-center rounded-b-lg">
                    <button
                     className="h-[50px] w-[150px]  bg-green-600 font-semibold text-white rounded hover:text-slate-300 focus:text-slate-300"
                      onClick={onClose}>
                        {t('cancel')}
                    </button>
                    <button
                     className="h-[50px] w-[150px] mr-10 ml-7 bg-red-600 font-semibold text-white px-4 py-2 rounded hover:bg-red-700 focus:bg-red-800"
                      onClick={onConfirm}>
                        {t('delete')}
                    </button>
                </div>
            </div>
        </div>
    );
};

DeleteModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    product: PropTypes.array,
};

export default DeleteModal;