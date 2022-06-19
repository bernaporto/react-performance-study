export const BASE_STORAGE_KEY = 'REACT_APP';
export const TEST_DATA_QUERY_KEY = 'test-date';
export const TEST_DATA_URL = 'https://jsonplaceholder.typicode.com/comments';

export enum ERouteType {
  MAIN = '/',
  PERFORMANCE_ITEM = '/performance/:uid',
  PERFORMANCE = '/performance',
  TEST_ITEM = '/test-item',
  TEST = '/test',
}

export const routeTitleMap: Record<ERouteType, string> = {
  [ERouteType.MAIN]: '1. Main Page',
  [ERouteType.TEST]: '2. Test Page',
  [ERouteType.PERFORMANCE]: '3. Performance Page',
  [ERouteType.TEST_ITEM]: 'Test Item Details',
  [ERouteType.PERFORMANCE_ITEM]: 'Performance Details',
};

export enum EEventType {
  FETCH = 'fetchData',
  RENDER = 'renderComponent',
}
