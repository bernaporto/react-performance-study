import './App.css';
import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteType } from './constants';
import {
  MainPage,
  PerformanceItemPage,
  PerformancePage,
  TestItemPage,
  TestPage,
} from './pages';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteType.MAIN} element={<MainPage />} />
        <Route path={RouteType.TEST} element={<TestPage />} />
        <Route path={RouteType.TEST_ITEM} element={<TestItemPage />} />
        <Route path={RouteType.PERFORMANCE} element={<PerformancePage />} />
        <Route
          path={`${RouteType.PERFORMANCE}/:uid`}
          element={<PerformanceItemPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};
