import React, { FC } from 'react';
import { PerformanceDataTable } from '../components';

export const PerformancePage: FC = () => {
  return (
    <section data-testid="performance-page-root" className="page-container">
      <PerformanceDataTable />
    </section>
  );
};
