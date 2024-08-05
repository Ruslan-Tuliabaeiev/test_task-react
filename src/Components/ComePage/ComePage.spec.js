import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ComePage } from './ComePage';
//import { I18nextProvider } from 'react-i18next';
// import i18n from './i18n';

describe('renders the ComePage component', () => {
    it('should render the ComePage component', () => {
          render(
    // <I18nextProvider i18n={i18n}>
      <ComePage />
    // </I18nextProvider>
  );

  expect(screen.getByTestId('come-page')).toBeInTheDocument();
    })

});

// test('filters products based on search query', () => {
//   render(
//     <I18nextProvider i18n={i18n}>
//       <ComePage />
//     </I18nextProvider>
//   );

//   const searchInput = screen.getByPlaceholderText(/search product/i);
//   fireEvent.change(searchInput, { target: { value: 'Product 1' } });

//   expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
//   expect(screen.queryByText(/Product 2/i)).not.toBeInTheDocument();
// });

// test('opens and closes the products modal', () => {
//   render(
//     <I18nextProvider i18n={i18n}>
//       <ComePage />
//     </I18nextProvider>
//   );

//   const toggleButton = screen.getByText(/to the list parishes/i);
//   fireEvent.click(toggleButton);

//   expect(screen.getByText(/very very long name Product 1/i)).toBeInTheDocument();

//   fireEvent.click(toggleButton);

//   expect(screen.queryByText(/very very long name Product 1/i)).not.toBeInTheDocument();
// });

// test('opens and closes the delete modal', () => {
//   render(
//     <I18nextProvider i18n={i18n}>
//       <ComePage />
//     </I18nextProvider>
//   );

//   const deleteButton = screen.getAllByText(/delete/i)[0];
//   fireEvent.click(deleteButton);

//   expect(screen.getByText(/are you sure you want to delete this product/i)).toBeInTheDocument();

//   const cancelButton = screen.getByText(/cancel/i);
//   fireEvent.click(cancelButton);

//   expect(screen.queryByText(/are you sure you want to delete this product/i)).not.toBeInTheDocument();
// });
