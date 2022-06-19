export type WithUid<T> = T & {
  uid: string;
};

export interface ITestData {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export interface IPerformanceData {
  fetchData: number | null;
  renderComponent: number | null;
  reportTime: string;
}

export type TPerformanceDataWithUid = WithUid<IPerformanceData>;
