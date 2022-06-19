import './App.css';
import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { ERouteType } from './constants';
import { CustomBrowserRouter, Layout } from './components';
import {
  MainPage,
  PerformanceItemPage,
  PerformancePage,
  TestItemPage,
  TestPage,
} from './pages';

const queryClient = new QueryClient();

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CustomBrowserRouter>
        <Layout>
          <Routes>
            <Route path={ERouteType.MAIN} element={<MainPage />} />
            <Route path={ERouteType.TEST} element={<TestPage />} />
            <Route path={ERouteType.TEST_ITEM} element={<TestItemPage />} />
            <Route
              path={ERouteType.PERFORMANCE}
              element={<PerformancePage />}
            />
            <Route
              path={`${ERouteType.PERFORMANCE}/:uid`}
              element={<PerformanceItemPage />}
            />
          </Routes>
        </Layout>
      </CustomBrowserRouter>
    </QueryClientProvider>
  );
};
