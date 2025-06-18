import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import OverviewPage from '../Pages/OverView';
import BlogAdminPage from '../Pages/BlogAdmin';

import Chart from '../Components/Chart'; // Assuming you have a Chart component

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-0 md:ml-64">
        <Header />
        <main className="p-6">
          <Outlet />
          
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
