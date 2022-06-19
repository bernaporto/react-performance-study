import React from 'react';
import { render } from '@testing-library/react';
import { TestPage } from './Test';

describe('TestPage', () => {
  it('should render', () => {
    const result = render(<TestPage />);

    expect(result.queryByTestId('test-page-root')).toBeTruthy();
  });
});
