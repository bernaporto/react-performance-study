import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { ItemDetails } from '../components';

export const TestItemPage: FC = () => {
  const { state } = useLocation();

  return (
    <section data-testid="test-item-page-root">
      <ItemDetails data={state} />
    </section>
  );
};
