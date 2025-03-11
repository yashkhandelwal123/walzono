import React from 'react';
// Note: Import icons from your icon library
import { LayoutDashboard, ShoppingCart, IndianRupee, CircleFadingPlus, CircleUser } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard }, // Replace with actual icon
    { id: 'orders', label: 'Orders', icon: ShoppingCart },       // Replace with actual icon
    { id: 'payments', label: 'Payments', icon: IndianRupee },   // Replace with actual icon
    { id: 'services', label: 'Services', icon: CircleFadingPlus },   // Replace with actual icon
    { id: 'profile', label: 'Profile', icon: CircleUser },
  ];

  return (
    <div className="w-64 bg-gray-900 min-h-screen p-4">
      <div className="text-white text-2xl font-bold mb-8 pl-4">Partner Portal</div>
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              {Icon && <Icon size={20} />}
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;