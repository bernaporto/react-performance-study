import React from 'react';
import { render } from '@testing-library/react';
import { PerformancePage } from './Performance';

describe('PerformancePage', () => {
  it('should render', () => {
    const result = render(<PerformancePage />);

    expect(result.queryByTestId('performance-page-root')).toBeTruthy();
  });
});
