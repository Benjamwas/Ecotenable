import React from 'react';
import Card, {CardContent} from '../Components/Card'
import Chart from '../Components/Chart'; // Assuming you have a Chart component
import { Bell, Settings, TrendingUp, DollarSign, BarChart3, PieChart, Activity } from 'lucide-react';
import Bookings from '../Pages/Bookings'
const OverviewPage = () => {
  return (
    <div className="space-y-6 top-6 pt-18">
      {/* Header */}
      <div className="flex  top-4 items-center justify-between">
        <h2 className="text-3xl font-semibold text-white">Sales Overview</h2>
        <div className="flex items-center space-x-4">
          <button className="p-2 bg-[#2d2d2d] rounded-full">
            <Bell className="text-white" />
          </button>
          <button className="p-2 bg-[#2d2d2d] rounded-full">
            <Settings className="text-white" />
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex gap-2">
        {["All", "Insight", "Service", "Analytic", "Target"].map((label) => (
          <button key={label} className="px-4 py-2 text-sm rounded-full bg-[#1f1f1f] text-white hover:bg-[#333]">
            {label}
          </button>
        ))}
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-green-50 text-black">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Total Bookings</p>
                <h3 className="text-xl font-bold">34</h3>
                <p className="text-green-400 text-xs">+2.3% from last month</p>
              </div>
              <TrendingUp />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 text-black">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Overall Bookings</p>
                <h3 className="text-xl font-bold">$786,443</h3>
                <p className="text-green-400 text-xs">+1.2% from last week</p>
              </div>
              <DollarSign />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50 text-black">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Total Blogs</p>
                <h3 className="text-xl font-bold">20 Monthly Blogs</h3>
                <div className="mt-2 h-2 w-full bg-[#333] rounded-full">
                  <div className="h-2 bg-yellow-400 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <BarChart3 />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sales Conversion & Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#1a1a1a] text-white p-24">
  <CardContent className="p-4">
    <div className="flex justify-between items-center mb-2">
      <p className="text-sm mb-7 p-4 text-center">Bookings Rate</p>
    </div>
    <div className="mt-4 h-40 flex items-center justify-center">
      <Chart />
    </div>
  </CardContent>
</Card>
 <Bookings />
      </div>
    </div>
  );
};

export default OverviewPage;

