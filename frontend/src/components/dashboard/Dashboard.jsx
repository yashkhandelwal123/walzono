import React from 'react';
import { IndianRupee, ShoppingBag , Users, ChartNoAxesCombined, IndianRupeeIcon } from 'lucide-react';


const Dashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '₹0',
      icon: IndianRupee, // Replace with actual icon component
      change: '+0%',
      trend: 'up',
    },
    {
      title: 'Total Orders',
      value: '0',
      icon: ShoppingBag, // Replace with actual icon component
      change: '+0%',
      trend: 'up',
    },
    {
      title: 'Active Customers',
      value: '0',
      icon: Users, // Replace with actual icon component
      change: '+0%',
      trend: 'up',
    },
    {
      title: 'Growth Rate',
      value: '0%',
      icon: ChartNoAxesCombined, // Replace with actual icon component
      change: '+0%',
      trend: 'up',
    },
  ];

  return (
    <div className="space-y-6 text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
                <div
                  className={`p-3 rounded-full ${
                    index === 0
                      ? 'bg-blue-100 text-blue-600'
                      : index === 1
                      ? 'bg-green-100 text-green-600'
                      : index === 2
                      ? 'bg-purple-100 text-purple-600'
                      : 'bg-orange-100 text-orange-600'
                  }`}
                >
                  {Icon && <Icon size={24} />}
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <span
                  className={`text-sm ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-gray-500 text-sm ml-2">vs last month</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          {/* Add a mini version of the order history here */}
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Payments</h3>
          {/* Add a mini version of the payment history here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;