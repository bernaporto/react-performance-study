import React from 'react';
import { render } from '@testing-library/react';
import { PerformanceItemPage } from './PerformanceItem';

describe('PerformanceItemPage', () => {
  it('should render', () => {
    const result = render(<PerformanceItemPage />);

    expect(result.queryByTestId('performance-item-page-root')).toBeTruthy();
  });
});
