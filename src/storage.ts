import { IPerformanceData } from './types';
import DataStorage from './utils/DataStorage';

export const performanceStorage = new DataStorage<IPerformanceData>(
  'PERFORMANCE_TEST'
);
