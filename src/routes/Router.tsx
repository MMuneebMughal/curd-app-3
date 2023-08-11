import { DashboardFrontEndLayout } from '@src/layout/dashboard/FrontEndLayout';
import { Routes, Route } from 'react-router-dom';
export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<DashboardFrontEndLayout />}></Route>
    </Routes>
  );
};
