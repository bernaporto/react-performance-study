export const TEST_DATA_URL = 'https://jsonplaceholder.typicode.com/comments';

export enum ERouteType {
  MAIN = '/',
  PERFORMANCE = '/performance',
  TEST_ITEM = '/test-item',
  TEST = '/test',
}

export const routeTitleMap: Record<ERouteType, string> = {
  [ERouteType.MAIN]: '1. Main Page',
  [ERouteType.TEST]: '2. Test Page',
  [ERouteType.PERFORMANCE]: '3. Performance Page',
  [ERouteType.TEST_ITEM]: 'Item Details',
};
