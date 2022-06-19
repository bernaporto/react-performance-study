import React from 'react';
import { render } from '@testing-library/react';
import { TestItemPage } from './TestItem';

describe('TestItemPage', () => {
  it('should render', () => {
    const result = render(<TestItemPage />);

    expect(result.queryByTestId('test-item-page-root')).toBeTruthy();
  });
});
