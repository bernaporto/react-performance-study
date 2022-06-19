import React from 'react';
import { render } from '@testing-library/react';
import { MainPage } from './Main';

describe('MainPage', () => {
  it('should render', () => {
    const result = render(<MainPage />);

    expect(result.queryByTestId('main-page-root')).toBeTruthy();
  });
});
